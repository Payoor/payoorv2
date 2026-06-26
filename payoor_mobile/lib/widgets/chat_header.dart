import 'package:flutter/material.dart';

class ChatHeader extends StatelessWidget {
  final bool green;
  final String? topic;

  const ChatHeader({super.key, this.green = false, this.topic});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        topic != null
            ? Text(
                topic!,
                style: const TextStyle(
                  color: Color(0xFF249B48),
                  fontSize: 20,
                  fontWeight: FontWeight.w500,
                ),
              )
            : Image.asset('assets/images/logo.png', height: 30),

        IconButton(
          onPressed: () => Scaffold.of(context).openDrawer(),
          iconSize: 32,
          icon: const Icon(Icons.menu),
          color: green ? const Color(0xFF249B48) : Colors.white,
        ),
      ],
    );
  }
}
