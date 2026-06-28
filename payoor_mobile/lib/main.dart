import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import './screens/home_screen.dart';
import './screens/landing_screen.dart';
import './screens/auth_screen.dart';
import './screens/onboarding_screen.dart';
import './screens/user_screen.dart';

import '../models/user.dart';

import './providers/product_provider.dart';
import './providers/cart_provider.dart';
import './providers/checkout_provider.dart';
import './providers/auth_provider.dart';

import './db/local_db.dart';

import './repositories/user_repository.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await LocalDb.db;

  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => ProductsProvider()),
        ChangeNotifierProvider(create: (_) => CartProvider()),
        ChangeNotifierProvider(create: (_) => CheckoutProvider()),
        ChangeNotifierProvider(create: (_) => AuthProvider()..init()),
      ],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    final authProvider = context.watch<AuthProvider>();

    return MaterialApp(
      debugShowCheckedModeBanner: false,

      home: authProvider.isLoggedIn
          ? const UserScreen()
          : const LandingScreen(),

      onGenerateRoute: (settings) {
        final uri = Uri.parse(settings.name ?? '');

        if (uri.path == '/callback') {
          final token = uri.queryParameters['token'];

          if (token != null && token.isNotEmpty) {
            Future.microtask(() {
              context.read<AuthProvider>().handleGoogleCallbackToken(token);
            });
          }

          return MaterialPageRoute(builder: (_) => const UserScreen());
        }

        return null;
      },

      onUnknownRoute: (settings) {
        final authProvider = context.read<AuthProvider>();

        return MaterialPageRoute(
          builder: (_) => authProvider.isLoggedIn
              ? const UserScreen()
              : const LandingScreen(),
        );
      },
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

//<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION"/>
