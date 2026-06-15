import 'package:flutter/material.dart';

import '../widgets/app_layout.dart';
import '../widgets/page_scroll.dart';
import '../widgets/chat_header.dart';

import '../widgets/chat_input.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  void openMenu() {
    print('Open menu');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFFFFFF),
      body: Column(
        children: [
          Expanded(
            child: AppLayout(
              child: Column(
                children: [
                  ChatHeader(green: true, onMenuTap: openMenu),

                  const SizedBox(height: 14),

                  Container(
                    width: double.infinity,
                    padding: const EdgeInsets.all(10),
                    decoration: const BoxDecoration(
                      color: Color(0xFF249B48),
                      borderRadius: BorderRadius.all(Radius.circular(10)),
                    ),
                    child: const Text(
                      "Here's what I found for farm fresh",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 14,
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                  ),

                  const SizedBox(height: 20),

                  Expanded(
                    child: ListView.builder(
                      itemCount: 100,
                      itemBuilder: (context, index) {
                        return Padding(
                          padding: const EdgeInsets.symmetric(vertical: 8),
                          child: Text(
                            'Item $index',
                            style: const TextStyle(color: Colors.red),
                          ),
                        );
                      },
                    ),
                  ),
                ],
              ),
            ),
          ),

          const ChatInput(hintText: 'Type a message...'),
        ],
      ),
    );
  }
}
