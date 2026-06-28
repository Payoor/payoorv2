import 'dart:async';

import 'package:app_links/app_links.dart';
import 'package:url_launcher/url_launcher.dart';

import '../models/user.dart';
import '../repositories/user_repository.dart';
import '../utils/api.dart';

class GoogleAuthRepository {
  final AppLinks appLinks = AppLinks();

  Future<User> signInWithGoogle() async {
    final completer = Completer<String>();

    final sub = appLinks.uriLinkStream.listen((uri) {
      if (uri.scheme == 'com.payoor.payoormobile' &&
          uri.host == 'auth' &&
          uri.path == '/callback') {
        final token = uri.queryParameters['token'];

        if (token != null && token.isNotEmpty && !completer.isCompleted) {
          completer.complete(token);
        }
      }
    });

    final loginUrl = Uri.parse(
      'https://751f-45-129-56-158.ngrok-free.app/shopper/auth/google/login?platform=mobile',
    );

    await launchUrl(
      loginUrl,
      mode: LaunchMode.externalApplication,
    );

    final token = await completer.future.timeout(
      const Duration(minutes: 3),
    );

    await sub.cancel();

    final userRes = await requestServerGet(
      '/shopper/auth/google/user',
      headers: {
        'Authorization': 'Bearer $token',
      },
    );

    final user = User.fromJson({
      ...userRes,
      'token': token,
    });

    await UserRepository().saveUser(user);

    return user;
  }
}