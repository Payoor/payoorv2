import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../providers/checkout_provider.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/menu_layout.dart';

class PromoCodeScreen extends StatefulWidget {
  final String authToken;

  const PromoCodeScreen({super.key, required this.authToken});

  @override
  State<PromoCodeScreen> createState() => _PromoCodeScreenState();
}

class _PromoCodeScreenState extends State<PromoCodeScreen> {
  final TextEditingController controller = TextEditingController();

  @override
  void initState() {
    super.initState();

    final checkout =
        context.read<CheckoutProvider>().checkoutData?['checkout'] ?? {};
    controller.text = checkout['promo_code']?.toString() ?? '';
  }

  void submit() {
    context.read<CheckoutProvider>().updatePromoCode(controller.text.trim());

    Navigator.pop(context);
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MenuLayout(
      page: Scaffold(
        backgroundColor: Colors.white,
        body: AppLayout(
          child: Column(
            children: [
              const ChatHeader(green: true, topic: 'Promo Code'),
              const SizedBox(height: 20),

              Expanded(
                child: TextField(
                  controller: controller,
                  decoration: InputDecoration(
                    hintText: 'Enter promo code',
                    contentPadding: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 14,
                    ),
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: const BorderSide(
                        color: Color(0xFF249B48),
                        width: 1.5,
                      ),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: const BorderSide(
                        color: Color(0xFF249B48),
                        width: 2,
                      ),
                    ),
                  ),
                ),
              ),

              GestureDetector(
                onTap: submit,
                child: Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(vertical: 12),
                  decoration: BoxDecoration(
                    color: const Color(0xFF249B48),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: const Center(
                    child: Text(
                      'Done',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 14,
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
    );
  }
}
