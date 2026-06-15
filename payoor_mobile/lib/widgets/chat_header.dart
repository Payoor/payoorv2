import 'package:flutter/material.dart';

class ChatHeader extends StatelessWidget {
  final bool green;
  final VoidCallback onMenuTap;

  const ChatHeader({super.key, this.green = false, required this.onMenuTap});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Image.asset('assets/images/logo.png', height: 30),

        IconButton(
          onPressed: onMenuTap,
          iconSize: 32,
          icon: const Icon(Icons.menu),
          color: green ? const Color(0xFF249B48) : Colors.white,
        ),
      ],
    );
  }
}
