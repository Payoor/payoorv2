import 'package:flutter/material.dart';

class ChatInput extends StatelessWidget {
  final String hintText;
  final TextEditingController? controller;
  final ValueChanged<String>? onChanged;

  const ChatInput({
    super.key,
    this.hintText = 'Type a message...',
    this.controller,
    this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      constraints: const BoxConstraints(
        minHeight: 96,
        maxHeight: 220,
      ),
      padding: const EdgeInsets.fromLTRB(20, 16, 20, 16),
      decoration: const BoxDecoration(
        color: Color(0xFF333333),
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(30),
          topRight: Radius.circular(30),
        ),
      ),
      child: TextField(
        controller: controller,
        onChanged: onChanged,
        minLines: 3,
        maxLines: 8,
        keyboardType: TextInputType.multiline,
        style: const TextStyle(
          color: Colors.white,
        ),
        decoration: InputDecoration(
          hintText: hintText,
          hintStyle: const TextStyle(
            color: Colors.white70,
          ),
          border: InputBorder.none,
          isCollapsed: true,
        ),
      ),
    );
  }
}