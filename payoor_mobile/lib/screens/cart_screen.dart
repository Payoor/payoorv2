import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../screens/checkout_screen.dart';
import '../screens/home_screen.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/menu_layout.dart';
import '../widgets/option_card.dart';

import '../providers/cart_provider.dart';

class CartScreen extends StatefulWidget {
  final String authToken;

  const CartScreen({super.key, required this.authToken});

  @override
  State<CartScreen> createState() => _CartScreenState();
}

class _CartScreenState extends State<CartScreen> {
  bool isLoading = false;

  @override
  void initState() {
    super.initState();

    Future.microtask(() {
      context.read<CartProvider>().loadCart();
    });
  }

  @override
  Widget build(BuildContext context) {
    final cartProvider = context.watch<CartProvider>();

    return MenuLayout(
      page: Scaffold(
        backgroundColor: const Color(0xFFFFFFFF),
        resizeToAvoidBottomInset: true,
        body: AppLayout(
          child: Column(
            children: [
              const ChatHeader(green: true, topic: 'Your Cart'),

              const SizedBox(height: 14),

              Expanded(
                child: cartProvider.items.isEmpty
                    ? const Center(child: Text('Your cart is empty'))
                    : ListView(
                        children: cartProvider.items.map((item) {
                          return OptionCard(
                            variantId: item['variantId'],
                            authToken: widget.authToken,
                          );
                        }).toList(),
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
                        onTap: () {
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
