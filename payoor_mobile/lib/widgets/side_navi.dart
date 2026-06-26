import 'package:flutter/material.dart';

import '../models/user.dart';

import '../screens/orders_screen.dart';

import '../repositories/user_repository.dart';

class SideNavi extends StatefulWidget {
  const SideNavi({super.key});

  @override
  State<SideNavi> createState() => _SideNaviState();
}

class _SideNaviState extends State<SideNavi> {
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

  TextStyle renderTextStyle({Color? textColor, double? fontSize}) {
    return TextStyle(
      color: textColor ?? Colors.black87,
      fontSize: fontSize ?? 15,
      fontWeight: FontWeight.w500,
    );
  }

  @override
  Widget build(BuildContext context) {
    final double menuBottomSpacing = MediaQuery.of(context).size.height * 0.04;

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

      child: Padding(
        padding: EdgeInsetsGeometry.only(
          top: MediaQuery.of(context).size.height * 0.084,
          left: 16,
          right: 16,
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Container(
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Image.asset('assets/images/logo.png', height: 30),
                    ],
                  ),

                  SizedBox(height: menuBottomSpacing),

                  GestureDetector(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) => OrdersScreen(authToken: user!.token),
                        ),
                      );
                    },
                    child: Row(
                      children: [Text('Orders', style: renderTextStyle())],
                    ),
                  ),

                  SizedBox(height: menuBottomSpacing),
                ],
              ),
            ),

            Container(
              child: Column(
                children: [
                  GestureDetector(
                    child: Row(
                      children: [Text('Signout', style: renderTextStyle())],
                    ),
                  ),

                  SizedBox(height: menuBottomSpacing),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
