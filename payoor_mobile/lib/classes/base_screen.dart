import 'package:flutter/material.dart';

abstract class BaseScreenState<T extends StatefulWidget> extends State<T> {
  bool isMenuOpen = false;

  void openMenu() {
    setState(() {
      isMenuOpen = true;
    });
  }

  void closeMenu() {
    setState(() {
      isMenuOpen = false;
    });
  }

  void toggleMenu() {
    setState(() {
      isMenuOpen = !isMenuOpen;
    });
  }
}
