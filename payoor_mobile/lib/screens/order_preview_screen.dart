import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../providers/checkout_provider.dart';
import '../providers/cart_provider.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/menu_layout.dart';
import '../widgets/orderpreview_itemcard.dart';

import '../screens/payment_screen.dart';

class OrderPreviewScreen extends StatefulWidget {
  final String authToken;

  const OrderPreviewScreen({super.key, required this.authToken});

  @override
  State<OrderPreviewScreen> createState() => _OrderPreviewScreenState();
}

class _OrderPreviewScreenState extends State<OrderPreviewScreen> {
  bool isLoading = false;

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

  Future<void> proceedToPayment() async {
    try {
      setState(() => isLoading = true);

      final data = await context
          .read<CheckoutProvider>()
          .updateCheckoutAndGeneratePaystackLink(widget.authToken);

      final authorizationUrl =
          data['data']?['authorizationUrl']?.toString() ?? '';

      print('Paystack URL: $authorizationUrl');

      // Next: open this URL with url_launcher or webview
    } catch (e) {
      print('Payment error: $e');
    } finally {
      if (mounted) {
        setState(() => isLoading = false);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final checkoutProvider = context.watch<CheckoutProvider>();
    final checkoutData = checkoutProvider.checkoutData ?? {};
    final checkout = checkoutData['checkout'] ?? {};

    final cartProvider = context.watch<CartProvider>();
    final cartItems = cartProvider.items;
    final cart = checkout['cart'] as List? ?? [];

    final deliveryAddress =
        checkout['delivery_address']?.toString() ?? 'No address provided';
    final phoneNumber =
        checkout['phone_number']?.toString() ?? 'No phone number provided';
    final deliveryInstruction =
        checkout['delivery_instruction']?.toString() ?? '';
    final promoCode = checkout['promo_code']?.toString() ?? '';

    final deliveryDate = formatDeliveryDate(checkout['delivery_date']);

    return MenuLayout(
      page: Scaffold(
        backgroundColor: Colors.white,
        body: SafeArea(
          child: AppLayout(
            child: Column(
              children: [
                const ChatHeader(green: true, topic: 'Review Order'),

                const SizedBox(height: 16),

                Expanded(
                  child: ListView(
                    children: [
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.all(14),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          border: Border.all(
                            color: const Color(0xFF249B48),
                            width: 1.5,
                          ),
                          borderRadius: BorderRadius.circular(14),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text(
                              'Order Summary',
                              style: TextStyle(
                                fontSize: 15,
                                fontWeight: FontWeight.w700,
                              ),
                            ),

                            const SizedBox(height: 12),

                            Text('Address: $deliveryAddress'),
                            const SizedBox(height: 6),

                            Text('Phone: $phoneNumber'),
                            const SizedBox(height: 6),

                            Text('Delivery Date: $deliveryDate'),

                            if (deliveryInstruction.isNotEmpty) ...[
                              const SizedBox(height: 6),
                              Text('Instruction: $deliveryInstruction'),
                            ],

                            if (promoCode.isNotEmpty) ...[
                              const SizedBox(height: 6),
                              Text('Promo Code: $promoCode'),
                            ],
                          ],
                        ),
                      ),

                      const SizedBox(height: 16),

                      const Text(
                        'Items',
                        style: TextStyle(
                          fontSize: 15,
                          fontWeight: FontWeight.w700,
                        ),
                      ),

                      const SizedBox(height: 10),

                      if (cartItems.isEmpty)
                        const Text(
                          'No cart items found',
                          style: TextStyle(fontSize: 13),
                        )
                      else
                        ...cartItems.map((item) {
                          final variantId = item['variantId']?.toString() ?? '';
                          final quantity =
                              int.tryParse(
                                item['quantity']?.toString() ?? '0',
                              ) ??
                              0;

                          return OrderPreviewItemCard(
                            variantId: variantId,
                            authToken: widget.authToken,
                            quantity: quantity,
                          );
                        }),

                      const SizedBox(height: 16),

                      _summaryRow('Sub-total', checkout['subtotal']),
                      const SizedBox(height: 10),
                      _summaryRow('Delivery Fee', checkout['delivery_fee']),
                      const SizedBox(height: 10),
                      _summaryRow('Service Charge', checkout['service_charge']),
                      const SizedBox(height: 10),
                      _summaryRow('Final Total', checkout['total']),
                    ],
                  ),
                ),

                const SizedBox(height: 12),

                GestureDetector(
                  onTap: () {
                    final checkout = context
                        .read<CheckoutProvider>()
                        .checkoutData?['checkout'];
                    final checkoutId = checkout['_id'].toString();

                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => PaymentScreen(
                          authToken: widget.authToken,
                          checkoutId: checkoutId,
                        ),
                      ),
                    );
                  },
                  child: Container(
                    width: double.infinity,
                    padding: const EdgeInsets.symmetric(
                      vertical: 14,
                      horizontal: 16,
                    ),
                    decoration: BoxDecoration(
                      color: const Color(0xFF249B48),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Center(
                      child: isLoading
                          ? const SizedBox(
                              width: 18,
                              height: 18,
                              child: CircularProgressIndicator(
                                strokeWidth: 2,
                                color: Colors.white,
                              ),
                            )
                          : const Text(
                              'Proceed to Payment',
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 15,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _summaryRow(String label, dynamic value) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          label,
          style: const TextStyle(
            color: Color(0xFF249B48),
            fontSize: 14,
            fontWeight: FontWeight.w500,
          ),
        ),
        Text(
          money(value),
          style: const TextStyle(
            color: Colors.black87,
            fontSize: 14,
            fontWeight: FontWeight.w600,
          ),
        ),
      ],
    );
  }
}
