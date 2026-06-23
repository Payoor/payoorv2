import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import './screens/home_screen.dart';
import './screens/landing_screen.dart';
import './screens/auth_screen.dart';
import './screens/onboarding_screen.dart';
import './screens/user_screen.dart';

import '../models/user.dart';

import './providers/product_provider.dart';

import './db/local_db.dart';

import './repositories/user_repository.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await LocalDb.db;

  final userRepository = UserRepository();
  final user = await userRepository.getUser();

  runApp(
    ChangeNotifierProvider(
      create: (_) => ProductsProvider(),
      child: MyApp(initialUser: user),
    ),
  );
}

class MyApp extends StatelessWidget {
  final User? initialUser;

  const MyApp({super.key, this.initialUser});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: initialUser != null ? const LandingScreen() : const LandingScreen(),
    );
  }
}

/*class MyApp extends StatelessWidget {
  MyApp({super.key});

  final userRepository = UserRepository();

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: AuthScreen(), //LandingScreen() //HomeScreen(),
    );
  }
}*/

// /opt/android-studio/bin/studio.sh

// flutter run -d emulator-5554

/*
MultiProvider(
  providers: [
    ChangeNotifierProvider(
      create: (_) => ProductsProvider(),
    ),
    ChangeNotifierProvider(
      create: (_) => AuthProvider(),
    ),
    ChangeNotifierProvider(
      create: (_) => CartProvider(),
    ),
  ],
  child: const MyApp(),
)
*/
