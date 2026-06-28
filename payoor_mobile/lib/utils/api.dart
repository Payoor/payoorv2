import 'dart:convert';

import 'package:http/http.dart' as http;

//String serverUrl = 'http://localhost/api';

//String serverUrl = 'http://10.0.2.2:3001';
// Android emulator uses 10.0.2.2 to reach your laptop localhost

String serverUrl = 'https://751f-45-129-56-158.ngrok-free.app';

Uri buildUri(String endpoint, {Map<String, dynamic>? queryParams}) {
  final uri = Uri.parse('$serverUrl$endpoint');

  if (queryParams == null || queryParams.isEmpty) return uri;

  final parts = <String>[];

  queryParams.forEach((key, value) {
    if (value == null) return;

    if (value is List) {
      for (final item in value) {
        parts.add(
          '${Uri.encodeQueryComponent(key)}=${Uri.encodeQueryComponent(item.toString())}',
        );
      }
    } else {
      parts.add(
        '${Uri.encodeQueryComponent(key)}=${Uri.encodeQueryComponent(value.toString())}',
      );
    }
  });

  return Uri.parse('${uri.toString()}?${parts.join('&')}');
}

Future<dynamic> requestServerGet(
  String endpoint, {
  Map<String, String>? headers,
  Map<String, dynamic>? queryParams,
}) async {
  final uri = buildUri(endpoint, queryParams: queryParams);

  final response = await http.get(
    uri,
    headers: {'Content-Type': 'application/json', ...?headers},
  );

  if (response.body.isEmpty) {
    return null;
  }

  return jsonDecode(response.body);
}

Future<dynamic> requestServerPost(
  String endpoint, {
  Map<String, String>? headers,
  Map<String, dynamic>? queryParams,
  Map<String, dynamic>? body,
}) async {
  final uri = buildUri(endpoint, queryParams: queryParams);

  final response = await http.post(
    uri,
    headers: {'Content-Type': 'application/json', ...?headers},
    body: jsonEncode(body ?? {}),
  );

  if (response.body.isEmpty) return null;

  print('POST URL: $uri');
  print('STATUS: ${response.statusCode}');
  print('BODY: ${response.body}');

  return jsonDecode(response.body);
}
