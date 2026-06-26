import 'package:flutter/material.dart';

import '../models/user.dart';

import '../repositories/user_repository.dart';

import '../screens/home_screen.dart';
import '../screens/auth_screen.dart';
import '../screens/onboarding_screen.dart';
import '../widgets/menu_layout.dart';

class UserScreen extends StatefulWidget {
  const UserScreen({super.key});

  @override
  State<UserScreen> createState() => _UserScreenState();
}

class _UserScreenState extends State<UserScreen> {
  User? user;

  @override
  void initState() {
    super.initState();

    loadUser();
  }

  Future<void> loadUser() async {
    final userRepository = UserRepository();

    final userAvailable = await userRepository.getUser();

    if (!mounted)
      return; //mounted is a property that already exists on every State object in Flutter.

    setState(() {
      user = userAvailable;
    });
  }

  @override
  Widget build(BuildContext context) {
    Widget currentPage;

    if (user != null) {
      if (user?.name == null || user?.phoneNumber == null) {
        currentPage = const OnboardingScreen();
      } else {
        currentPage = HomeScreen(authToken: user!.token);
      }
    } else {
      currentPage = const AuthScreen();
    }

    return MenuLayout(page: currentPage);
  }
}
