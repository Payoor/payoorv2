import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../models/user.dart';

import '../repositories/user_repository.dart';

import '../screens/cart_screen.dart';
import '../screens/orders_screen.dart';

import '../providers/cart_provider.dart';
import '../providers/auth_provider.dart';
import '../providers/checkout_provider.dart';
import '../providers/product_provider.dart';

import '../screens/landing_screen.dart';

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

    if (!mounted) return;

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

  Widget menuItem({
    required IconData icon,
    required String title,
    required VoidCallback onTap,
    Color? color,
  }) {
    final itemColor = color ?? const Color(0xFF249B48);

    return GestureDetector(
      behavior: HitTestBehavior.opaque,
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 10),
        child: Row(
          children: [
            Icon(icon, size: 22, color: itemColor),
            const SizedBox(width: 14),
            Text(title, style: renderTextStyle(textColor: itemColor)),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final cartProvider = context.watch<CartProvider>();
    final cartItemCount = cartProvider.itemCount;
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
        padding: EdgeInsets.only(
          top: MediaQuery.of(context).size.height * 0.084,
          left: 16,
          right: 16,
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Image.asset('assets/images/logo.png', height: 30),

                SizedBox(height: menuBottomSpacing),

                menuItem(
                  icon: Icons.receipt_long_rounded,
                  title: 'Orders',
                  onTap: () {
                    if (user == null) return;

                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => OrdersScreen(authToken: user!.token),
                      ),
                    );
                  },
                ),

                const SizedBox(height: 8),

                menuItem(
                  icon: Icons.shopping_cart_outlined,
                  title: 'Cart ($cartItemCount)',
                  onTap: () {
                    if (user == null) return;

                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => CartScreen(authToken: user!.token),
                      ),
                    );
                  },
                ),

                SizedBox(height: menuBottomSpacing),
              ],
            ),

            Column(
              children: [
                const Divider(),

                menuItem(
                  icon: Icons.logout_rounded,
                  title: 'Sign Out',
                  color: Colors.redAccent,
                  onTap: () async {
                    await context.read<AuthProvider>().signOut(
                      cartProvider: context.read<CartProvider>(),
                      checkoutProvider: context.read<CheckoutProvider>(),
                      productsProvider: context.read<ProductsProvider>(),
                    );

                    if (!mounted) return;

                    Navigator.of(context).pushAndRemoveUntil(
                      MaterialPageRoute(builder: (_) => const LandingScreen()),
                      (route) => false,
                    );
                  },
                ),

                SizedBox(height: menuBottomSpacing),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
