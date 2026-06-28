import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../providers/checkout_provider.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/menu_layout.dart';

class UserphonenumberScreen extends StatefulWidget {
  final String authToken;

  const UserphonenumberScreen({super.key, required this.authToken});

  @override
  State<UserphonenumberScreen> createState() => _UserphonenumberScreenState();
}

class _UserphonenumberScreenState extends State<UserphonenumberScreen> {
  final TextEditingController phoneController = TextEditingController();

  String errorMessage = '';

  @override
  void initState() {
    super.initState();

    final checkoutProvider = context.read<CheckoutProvider>();
    final checkout = checkoutProvider.checkoutData?['checkout'] ?? {};
    final currentPhone = checkout['phone_number']?.toString() ?? '';

    phoneController.text = currentPhone;
  }

  bool isValidNigerianPhone(String value) {
    final cleaned = value.trim();

    final regex = RegExp(
      r'^(0[789][01]\d{8}|\+234[789][01]\d{8}|234[789][01]\d{8})$',
    );

    return regex.hasMatch(cleaned);
  }

  String normalizePhone(String value) {
    final cleaned = value.trim();

    if (cleaned.startsWith('+234')) return cleaned;
    if (cleaned.startsWith('234')) return '+$cleaned';
    if (cleaned.startsWith('0')) return '+234${cleaned.substring(1)}';

    return cleaned;
  }

  void submitPhoneNumber() {
    final value = phoneController.text.trim();

    if (value.isEmpty) {
      setState(() {
        errorMessage = 'Please enter a phone number';
      });
      return;
    }

    if (!isValidNigerianPhone(value)) {
      setState(() {
        errorMessage = 'Enter a valid Nigerian phone number';
      });
      return;
    }

    final normalizedPhone = normalizePhone(value);

    context.read<CheckoutProvider>().updatePhoneNumber(normalizedPhone);

    Navigator.pop(context);
  }

  @override
  void dispose() {
    phoneController.dispose();
    super.dispose();
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
              const ChatHeader(green: true, topic: 'Phone Number'),

              const SizedBox(height: 20),

              Expanded(
                child: ListView(
                  children: [
                    const Text(
                      'Update the phone number linked to this order.',
                      style: TextStyle(
                        color: Colors.black87,
                        fontSize: 14,
                        height: 1.5,
                      ),
                    ),

                    const SizedBox(height: 16),

                    TextField(
                      controller: phoneController,
                      keyboardType: TextInputType.phone,
                      decoration: InputDecoration(
                        hintText: '08012345678',
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

                    if (errorMessage.isNotEmpty) ...[
                      const SizedBox(height: 8),
                      Text(
                        errorMessage,
                        style: const TextStyle(
                          color: Colors.red,
                          fontSize: 12,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ],
                  ],
                ),
              ),

              GestureDetector(
                onTap: submitPhoneNumber,
                child: Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 12,
                  ),
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
