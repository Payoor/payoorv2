import 'package:flutter/material.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/side_navi.dart';

class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({super.key});

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFB6EDF2),
      resizeToAvoidBottomInset: true,
      body: Stack(
        children: [
          SafeArea(
            child: Column(
              children: [
                Expanded(
                  child: AppLayout(
                    child: Column(
                      children: [ChatHeader(green: true), const Spacer()],
                    ),
                  ),
                ),
              ],
            ),
          ),

          Positioned(child: SideNavi()),
        ],
      ),
    );
  }
}
