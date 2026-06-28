import 'package:flutter/material.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:provider/provider.dart';

import '../utils/api.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/menu_layout.dart';

import '../providers/cart_provider.dart';

class OrdersScreen extends StatefulWidget {
  final String authToken;

  const OrdersScreen({super.key, required this.authToken});

  @override
  State<OrdersScreen> createState() => _OrdersScreenState();
}

class _OrdersScreenState extends State<OrdersScreen> {
  bool isLoading = false;
  List<dynamic> orders = [];

  @override
  void initState() {
    super.initState();
    getOrders();
  }

  Future<void> getOrders() async {
    setState(() {
      isLoading = true;
    });

    try {
      final data = await requestServerGet(
        '/shopper/user/getorders',
        headers: {'Authorization': 'Bearer ${widget.authToken}'},
      );

      print(data);

      if (!mounted) return;

      setState(() {
        orders = data['orders'] ?? [];
      });
    } catch (e) {
      print('Orders error: $e');
    } finally {
      if (mounted) {
        setState(() {
          isLoading = false;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return MenuLayout(
      page: Scaffold(
        backgroundColor: const Color(0xFFFFFFFF),
        resizeToAvoidBottomInset: true,
        body: AppLayout(
          child: Column(
            children: [
              const ChatHeader(green: true, topic: 'Your Orders'),

              const SizedBox(height: 14),

              Expanded(
                child: isLoading
                    ? const Center(child: CircularProgressIndicator())
                    : orders.isEmpty
                    ? const Center(child: Text('No orders yet'))
                    : ListView(
                        children: orders.map((order) {
                          return OrderCard(
                            order: order,
                            authToken: widget.authToken,
                          );
                        }).toList(),
                      ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class OrderCard extends StatefulWidget {
  final dynamic order;
  final String authToken;

  const OrderCard({super.key, required this.order, required this.authToken});

  @override
  State<OrderCard> createState() => _OrderCardState();
}

class _OrderCardState extends State<OrderCard> {
  bool showCart = false;

  String money(dynamic value) {
    final amount = double.tryParse(value?.toString() ?? '0') ?? 0;
    return '₦${amount.toStringAsFixed(0)}';
  }

  String formatDeliveryDate(dynamic deliveryDate) {
    if (deliveryDate is Map) {
      final day = deliveryDate['day']?.toString() ?? '';
      final date = deliveryDate['date']?.toString() ?? '';
      final month = deliveryDate['month']?.toString() ?? '';

      return '$day, $month $date';
    }

    return '';
  }

  Future<void> repeatOrder() async {
    final cart = widget.order['cart'] as List? ?? [];

    for (final item in cart) {
      final variantId = item['_id']?.toString() ?? '';
      final price = double.tryParse(item['price']?.toString() ?? '0') ?? 0;
      final quantity = int.tryParse(item['quantity']?.toString() ?? '1') ?? 1;

      if (variantId.isEmpty) continue;

      for (int i = 0; i < quantity; i++) {
        await context.read<CartProvider>().addItem(variantId, price);
      }
    }

    if (!mounted) return;

    ScaffoldMessenger.of(
      context,
    ).showSnackBar(const SnackBar(content: Text('Order added to cart')));
  }

  @override
  Widget build(BuildContext context) {
    final order = widget.order;
    final checkout = order['checkout_id'] ?? {};
    final cart = order['cart'] as List? ?? [];

    final orderId = order['_id']?.toString() ?? '';
    final total = checkout['total'] ?? order['total'] ?? 0;
    final address = checkout['delivery_address']?.toString() ?? '';
    final phone = checkout['phone_number']?.toString() ?? '';
    final deliveryDate = formatDeliveryDate(checkout['delivery_date']);

    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border.all(color: const Color(0xFF249B48), width: 1.5),
        borderRadius: BorderRadius.circular(14),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Order ID: $orderId',
            style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700),
          ),

          const SizedBox(height: 6),

          Text(
            'Total: ${money(total)}',
            style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w500),
          ),

          const SizedBox(height: 6),

          Text(
            'Delivery Date: $deliveryDate',
            style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w500),
          ),

          const SizedBox(height: 12),

          Row(
            children: [
              GestureDetector(
                onTap: () {
                  setState(() {
                    showCart = !showCart;
                  });
                },
                child: Container(
                  decoration: BoxDecoration(
                    color: const Color(0xFF249B48).withOpacity(0.08),
                    borderRadius: BorderRadius.circular(48),
                    border: Border.all(color: const Color(0xFF249B48)),
                  ),
                  padding: const EdgeInsets.symmetric(
                    horizontal: 14,
                    vertical: 7,
                  ),
                  child: Text(
                    showCart ? 'Hide Cart' : 'Show Cart',
                    style: const TextStyle(
                      color: Color(0xFF249B48),
                      fontSize: 12,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),

              const SizedBox(width: 10),

              GestureDetector(
                onTap: repeatOrder,
                child: Container(
                  decoration: BoxDecoration(
                    color: const Color(0xFF249B48),
                    borderRadius: BorderRadius.circular(48),
                  ),
                  padding: const EdgeInsets.symmetric(
                    horizontal: 14,
                    vertical: 7,
                  ),
                  child: const Text(
                    'Repeat Order',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 12,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
            ],
          ),

          if (showCart) ...[
            const SizedBox(height: 16),

            Text(
              'Address: ${address.isEmpty ? 'No address provided' : address}',
              style: const TextStyle(fontSize: 12),
            ),

            const SizedBox(height: 6),

            Text(
              'Phone: ${phone.isEmpty ? 'No phone number provided' : phone}',
              style: const TextStyle(fontSize: 12),
            ),

            const SizedBox(height: 14),

            const Text(
              'Items',
              style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700),
            ),

            const SizedBox(height: 10),

            ...cart.map((item) {
              final product = item['product'] ?? {};
              final name = product['name']?.toString() ?? '';
              final tags = product['metadata']?.toString() ?? '';
              final image = item['image']?.toString() ?? '';
              final unit = item['unit']?.toString() ?? '';
              final price =
                  double.tryParse(item['price']?.toString() ?? '0') ?? 0;
              final quantity =
                  int.tryParse(item['quantity']?.toString() ?? '0') ?? 0;

              return Container(
                margin: const EdgeInsets.only(bottom: 12),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    SizedBox(
                      width: MediaQuery.of(context).size.width * 0.22,
                      height: 72,
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(12),
                        child: CachedNetworkImage(
                          imageUrl: image,
                          fit: BoxFit.cover,
                          placeholder: (context, url) => Image.asset(
                            'assets/images/loading.jpg',
                            fit: BoxFit.cover,
                          ),
                          errorWidget: (context, url, error) => Image.asset(
                            'assets/images/loading.jpg',
                            fit: BoxFit.cover,
                          ),
                        ),
                      ),
                    ),

                    const SizedBox(width: 10),

                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Name: $name'),
                          if (tags.isNotEmpty) Text('Tags: $tags'),
                          Text('Unit: $unit'),
                          Text('Price: ${money(price)}'),
                          Text('Quantity: $quantity'),
                          Text('Total: ${money(price * quantity)}'),
                        ],
                      ),
                    ),
                  ],
                ),
              );
            }),
          ],
        ],
      ),
    );
  }
}
