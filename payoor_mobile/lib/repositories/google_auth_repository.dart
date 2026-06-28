import 'package:flutter_appauth/flutter_appauth.dart';

import '../models/user.dart';
import '../repositories/user_repository.dart';
import '../utils/api.dart';

class GoogleAuthRepository {
  final FlutterAppAuth appAuth = const FlutterAppAuth();

  final String googleClientId =
      'YOUR_MOBILE_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

  final String redirectUri = 'com.payoor.payoormobile:/oauthredirect';

  Future<User> signInWithGoogle() async {
    final result = await appAuth.authorize(
      AuthorizationRequest(
        googleClientId,
        redirectUri,
        serviceConfiguration: const AuthorizationServiceConfiguration(
          authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
          tokenEndpoint: 'https://oauth2.googleapis.com/token',
        ),
        scopes: ['openid', 'profile', 'email'],
        promptValues: ['select_account'],
      ),
    );

    final code = result.authorizationCode;
    final codeVerifier = result.codeVerifier;

    if (code == null || code.isEmpty) {
      throw Exception('Missing Google authorization code');
    }

    if (codeVerifier == null || codeVerifier.isEmpty) {
      throw Exception('Missing Google code verifier');
    }

    final tokenRes = await requestServerPost(
      '/shopper/auth/google/token',
      body: {
        'code': code,
        'client_id': googleClientId,
        'redirect_uri': redirectUri,
        'grant_type': 'authorization_code',
        'code_verifier': codeVerifier,
      },
    );

    final rawToken =
        tokenRes['token']?.toString() ??
        tokenRes['access_token']?.toString() ??
        '';

    if (rawToken.isEmpty) {
      throw Exception('Missing Payoor token from backend');
    }

    final userRes = await requestServerGet(
      '/shopper/auth/google/user',
      headers: {
        'Authorization': 'Bearer $rawToken',
      },
    );

    final user = User.fromJson({
      ...userRes,
      'token': rawToken,
    });

    await UserRepository().saveUser(user);

    return user;
  }
}