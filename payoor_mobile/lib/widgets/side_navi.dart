import 'package:flutter/material.dart';

class SideNavi extends StatefulWidget {
  final Widget? child;

  const SideNavi({super.key, this.child});

  @override
  State<SideNavi> createState() => _SideNaviState();
}

class _SideNaviState extends State<SideNavi> {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width * 0.6,
      height: MediaQuery.of(context).size.height,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: const BorderRadius.only(
          topRight: Radius.circular(24),
          bottomRight: Radius.circular(24),
        ),
        boxShadow: [
          BoxShadow(
            color: const Color(0xFF249B48).withOpacity(0.25),
            blurRadius: 20,
            spreadRadius: 2,
            offset: const Offset(0, 0),
          ),
        ],
      ),
    );
  }
}
