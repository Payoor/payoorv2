import 'package:flutter/material.dart';

import '../widgets/side_navi.dart';

class MenuLayout extends StatefulWidget {
  final Widget? page;

  const MenuLayout({super.key, this.page});

  @override
  State<MenuLayout> createState() => _MenuLayoutState();
}

class _MenuLayoutState extends State<MenuLayout> {
  double dragX = 0;
  bool isMenuOpen = false;

  static const double menuWidthFactor = 0.6;

  void openMenu(double slideAmount) {
    setState(() {
      isMenuOpen = true;
      dragX = -slideAmount;
    });
  }

  void closeMenu() {
    setState(() {
      isMenuOpen = false;
      dragX = 0;
    });
  }

  @override
  void dispose() {
    dragX = 0;
    isMenuOpen = false;
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final slideAmount = screenWidth * menuWidthFactor;

    return PopScope(
      canPop: !isMenuOpen,
      onPopInvokedWithResult: (didPop, result) {
        if (!didPop && isMenuOpen) {
          closeMenu();
        }
      },
      child: Scaffold(
        body: GestureDetector(
          behavior: HitTestBehavior.translucent,
          onHorizontalDragUpdate: (details) {
            setState(() {
              dragX += details.delta.dx;
              dragX = dragX.clamp(-slideAmount, 0);
            });
          },
          onHorizontalDragEnd: (details) {
            final shouldOpen = dragX.abs() > slideAmount * 0.35;

            if (shouldOpen) {
              openMenu(slideAmount);
            } else {
              closeMenu();
            }
          },
          child: Stack(
            children: [
              const Positioned(right: 0, top: 0, bottom: 0, child: SideNavi()),

              AnimatedContainer(
                duration: const Duration(milliseconds: 220),
                curve: Curves.easeOutCubic,
                transform: Matrix4.translationValues(dragX, 0, 0),
                child: SizedBox.expand(child: widget.page ?? const SizedBox()),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
