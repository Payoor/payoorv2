import 'package:flutter/material.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/menu_layout.dart';

class OrdersScreen extends StatefulWidget {
  final String authToken;

  const OrdersScreen({super.key, required this.authToken});

  @override
  State<OrdersScreen> createState() => _OrdersScreenState();
}

class _OrdersScreenState extends State<OrdersScreen> {
  bool isLoading = false;

  @override
  Widget build(BuildContext context) {
    return MenuLayout(
      page: Scaffold(
        backgroundColor: const Color(0xFFFFFFFF),
        resizeToAvoidBottomInset: true,
        body: AppLayout(
          child: Column(
            children: [
              ChatHeader(green: true, topic: 'Your Orders'),

              const SizedBox(height: 14),

              Expanded(
                child: isLoading
                    ? const Center(child: CircularProgressIndicator())
                    : ListView(children: [

                    ],),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
