import 'package:flutter/material.dart';

class PageScroll extends StatelessWidget {
  final Widget child;

  const PageScroll({
    super.key,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      physics: const BouncingScrollPhysics(),
      child: child,
    );
  }
}