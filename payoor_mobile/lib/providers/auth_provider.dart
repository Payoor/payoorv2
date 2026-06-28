import 'dart:async';
import 'package:flutter/material.dart';
import 'package:app_links/app_links.dart';
import 'package:url_launcher/url_launcher.dart';

import '../models/user.dart';
import '../repositories/user_repository.dart';
import '../utils/api.dart';

import '../providers/product_provider.dart';
import '../providers/cart_provider.dart';
import '../providers/checkout_provider.dart';

class AuthProvider extends ChangeNotifier {
  final UserRepository userRepository = UserRepository();
  final AppLinks appLinks = AppLinks();

  User? user;
  bool isLoading = false;

  StreamSubscription<Uri>? _linkSubscription;

  bool get isLoggedIn => user != null;
  String? get token => user?.token;

  Future<void> init() async {
    await loadUser();
    listenForAuthLinks();
  }

  Future<void> loadUser() async {
    user = await userRepository.getUser();
    notifyListeners();
  }

  Future<void> saveUser(User newUser) async {
    user = newUser;
    await userRepository.saveUser(newUser);
    notifyListeners();
  }

  Future<User?> verifyOtp(String submittedOtp) async {
    isLoading = true;
    notifyListeners();

    try {
      final data = await requestServerPost(
        '/shopper/auth/verifyotp',
        body: {'submittedOtp': submittedOtp},
      );

      if (data['success'] == true && data['user'] != null) {
        final newUser = User.fromJson(data['user']);
        await saveUser(newUser);
        return newUser;
      }

      return null;
    } finally {
      isLoading = false;
      notifyListeners();
    }
  }

  Future<void> requestOtp(String email) async {
    await requestServerPost('/shopper/auth/mail', body: {'identifier': email});
  }

  Future<void> signInWithGoogle() async {
    final loginUrl = Uri.parse(
      'https://api.payoor.store/shopper/auth/google/login?platform=mobile',
    );

    await launchUrl(loginUrl, mode: LaunchMode.externalApplication);
  }

  void listenForAuthLinks() {
    _linkSubscription?.cancel();

    _linkSubscription = appLinks.uriLinkStream.listen((uri) {
      final isGoogleCallback =
          uri.scheme == 'com.payoor.payoormobile' &&
          uri.host == 'auth' &&
          uri.path == '/callback';

      final isFlutterRouteCallback = uri.path == '/callback';

      if (!isGoogleCallback && !isFlutterRouteCallback) return;

      final callbackToken = uri.queryParameters['token'];

      if (callbackToken == null || callbackToken.isEmpty) return;

      handleGoogleCallbackToken(callbackToken);
    });
  }

  Future<void> handleGoogleCallbackToken(String callbackToken) async {
    isLoading = true;
    notifyListeners();

    try {
      final userRes = await requestServerGet(
        '/shopper/auth/google/user',
        headers: {'Authorization': 'Bearer $callbackToken'},
      );

      final newUser = User.fromJson({...userRes, 'token': callbackToken});

      await saveUser(newUser);
    } catch (e) {
      print('Google callback error: $e');
    } finally {
      isLoading = false;
      notifyListeners();
    }
  }

  Future<void> signOut({
    required CartProvider cartProvider,
    required CheckoutProvider checkoutProvider,
    required ProductsProvider productsProvider,
  }) async {
    isLoading = true;
    notifyListeners();

    try {
      await userRepository.deleteUser();

      await cartProvider.clearCart();

      await checkoutProvider.clear();

      productsProvider.clear();

      user = null;
    } finally {
      isLoading = false;
      notifyListeners();
    }
  }

  @override
  void dispose() {
    _linkSubscription?.cancel();
    super.dispose();
  }
}
