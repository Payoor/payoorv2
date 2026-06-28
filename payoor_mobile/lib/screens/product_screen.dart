import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../screens/checkout_screen.dart';
import '../screens/home_screen.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/menu_layout.dart';
import '../widgets/option_card.dart';

import '../models/product_variant.dart';

import '../utils/api.dart';

import '../providers/cart_provider.dart';
import '../providers/checkout_provider.dart';

class ProductScreen extends StatefulWidget {
  final String? productId;
  final String productName;
  final String productImage;
  final String? productMetadata;
  final String productDescription;
  final String authToken;

  const ProductScreen({
    super.key,
    required this.productId,
    required this.productName,
    required this.productImage,
    required this.productMetadata,
    required this.productDescription,
    required this.authToken,
  });

  @override
  State<ProductScreen> createState() => _ProductScreenState();
}

class _ProductScreenState extends State<ProductScreen> {
  bool isLoading = false;
  List<ProductVariant> productVariants = [];

  Future<Map<String, dynamic>> getProductVariants() async {
    final productId = widget.productId;

    if (productId == null || productId.isEmpty) {
      throw Exception('Missing productId');
    }

    final data = await requestServerGet(
      '/shopper/getoptions',
      queryParams: {'mongooseid': productId},
      headers: {'Authorization': 'Bearer ${widget.authToken}'},
    );

    return data;
  }

  Future<void> getVariants() async {
    try {
      setState(() {
        isLoading = true;
      });

      final data = await getProductVariants();
      final List rawVariants = data['variants'];

      final variantsList = rawVariants
          .map((item) => ProductVariant.fromJson(item))
          .toList();

      setState(() {
        productVariants = variantsList;
      });
    } catch (e) {
      print('Error $e');
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }

  @override
  void initState() {
    super.initState();

    getVariants();

    Future.microtask(() {
      context.read<CartProvider>().loadCart();
    });
  }

  @override
  Widget build(BuildContext context) {
    final cartProvider = context.watch<CartProvider>();

    final List<String> metadataItems = (widget.productMetadata ?? '')
        .split(',')
        .map((item) => item.trim())
        .where((item) => item.isNotEmpty)
        .toList();

    return MenuLayout(
      page: Scaffold(
        backgroundColor: const Color(0xFFFFFFFF),
        resizeToAvoidBottomInset: true,
        body: AppLayout(
          child: Column(
            children: [
              ChatHeader(green: true, topic: widget.productName),

              const SizedBox(height: 14),

              Expanded(
                child: isLoading
                    ? const Center(child: CircularProgressIndicator())
                    : ListView(
                        children: [
                          ...productVariants.map((variant) {
                            return OptionCard(
                              variant: variant,
                              authToken: widget.authToken,
                            );
                          }),

                          const SizedBox(height: 20),

                          SizedBox(
                            width: double.infinity,
                            child: Wrap(
                              spacing: 8,
                              runSpacing: 8,
                              children: metadataItems.map((item) {
                                return GestureDetector(
                                  onTap: () {
                                    print('Clicked metadata: $item');
                                  },
                                  child: Container(
                                    padding: const EdgeInsets.symmetric(
                                      horizontal: 12,
                                      vertical: 6,
                                    ),
                                    decoration: BoxDecoration(
                                      color: const Color(
                                        0xFF249B48,
                                      ).withOpacity(0.12),
                                      border: Border.all(
                                        color: const Color(0xFF249B48),
                                        width: 1,
                                      ),
                                      borderRadius: BorderRadius.circular(48),
                                    ),
                                    child: Text(
                                      item,
                                      style: const TextStyle(
                                        color: Color(0xFF249B48),
                                        fontSize: 12,
                                        fontWeight: FontWeight.w600,
                                      ),
                                    ),
                                  ),
                                );
                              }).toList(),
                            ),
                          ),

                          SizedBox(height: 20),

                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Text(
                                'Product Desription',
                                style: TextStyle(fontWeight: FontWeight(500)),
                              ),
                              Text(
                                (widget.productDescription?.isNotEmpty ?? false)
                                    ? widget.productDescription!
                                    : "This product comes in multiple variants. Select the one that best fits your needs. Each variant is carefully crafted to ensure the best quality and customer satisfaction.",
                                style: const TextStyle(
                                  color: Color(0xFF555555),
                                  fontSize: 12,
                                  height: 1.6,
                                ),
                              ),
                            ],
                          ),

                          SizedBox(height: 20),
                        ],
                      ),
              ),

              Container(
                color: Colors.white,
                child: Padding(
                  padding: const EdgeInsets.only(top: 10, bottom: 10),
                  child: Column(
                    children: [
                      GestureDetector(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (_) =>
                                  HomeScreen(authToken: widget.authToken),
                            ),
                          );
                        },
                        child: Container(
                          width: double.infinity,
                          decoration: BoxDecoration(
                            color: Colors.white,
                            border: Border.all(
                              color: const Color(0xFF249B48),
                              width: 1.5,
                            ),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          padding: const EdgeInsets.symmetric(
                            vertical: 14,
                            horizontal: 16,
                          ),
                          child: const Center(
                            child: Text(
                              'Continue Shopping',
                              style: TextStyle(
                                color: Color(0xFF249B48),
                                fontSize: 16,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                          ),
                        ),
                      ),

                      const SizedBox(height: 20),

                      GestureDetector(
                        onTap: () async {
                          final cartProvider = context.read<CartProvider>();
                          final checkoutProvider = context
                              .read<CheckoutProvider>();

                          await checkoutProvider.getOrCreateCheckout(
                            authToken: widget.authToken,
                            cartProvider: cartProvider,
                          );

                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (_) =>
                                  CheckoutScreen(authToken: widget.authToken),
                            ),
                          );
                        },
                        child: Container(
                          width: double.infinity,
                          decoration: BoxDecoration(
                            color: const Color(0xFF249B48),
                            border: Border.all(
                              color: const Color(0xFF249B48),
                              width: 1.5,
                            ),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          padding: const EdgeInsets.symmetric(
                            vertical: 14,
                            horizontal: 16,
                          ),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              const Text(
                                'Proceed to Checkout',
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 16,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                              Text(
                                '₦${cartProvider.total.toStringAsFixed(0)}',
                                style: const TextStyle(
                                  color: Colors.white,
                                  fontSize: 16,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
