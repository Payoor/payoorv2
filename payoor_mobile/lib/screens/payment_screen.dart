import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

import '../utils/api.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/menu_layout.dart';

class PaymentScreen extends StatefulWidget {
  final String authToken;
  final String checkoutId;

  const PaymentScreen({
    super.key,
    required this.authToken,
    required this.checkoutId,
  });

  @override
  State<PaymentScreen> createState() => _PaymentScreenState();
}

class _PaymentScreenState extends State<PaymentScreen> {
  bool isLoading = true;
  bool isWebViewLoading = true;

  String? authorizationUrl;
  WebViewController? webViewController;

  @override
  void initState() {
    super.initState();
    generatePaymentLink();
  }

  Future<void> generatePaymentLink() async {
    try {
      setState(() {
        isLoading = true;
        isWebViewLoading = true;
      });

      final data = await requestServerGet(
        '/shopper/paystack/generate-paystack-link',
        queryParams: {'checkout_id': widget.checkoutId},
        headers: {'Authorization': 'Bearer ${widget.authToken}'},
      );

      final url = data['data']?['authorizationUrl']?.toString();

      if (url == null || url.isEmpty) {
        throw Exception('Missing Paystack authorization URL');
      }

      final controller = WebViewController()
        ..setJavaScriptMode(JavaScriptMode.unrestricted)
        ..setNavigationDelegate(
          NavigationDelegate(
            onPageStarted: (url) {
              if (mounted) {
                setState(() {
                  isWebViewLoading = true;
                });
              }
            },
            onPageFinished: (url) {
              if (mounted) {
                setState(() {
                  isWebViewLoading = false;
                });
              }
            },
            onNavigationRequest: (request) {
              print('Payment URL: ${request.url}');

              return NavigationDecision.navigate;
            },
          ),
        )
        ..loadRequest(Uri.parse(url));

      if (!mounted) return;

      setState(() {
        authorizationUrl = url;
        webViewController = controller;
        isLoading = false;
      });
    } catch (e) {
      print('Payment link error: $e');

      if (mounted) {
        setState(() {
          isLoading = false;
          isWebViewLoading = false;
        });
      }
    }
  }

  Widget loadingState(String text) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const CircularProgressIndicator(color: Color(0xFF249B48)),
          const SizedBox(height: 12),
          Text(
            text,
            style: const TextStyle(
              color: Colors.black54,
              fontSize: 14,
              fontWeight: FontWeight.w500,
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return MenuLayout(
      page: Scaffold(
        backgroundColor: Colors.white,
        body: SafeArea(
          child: AppLayout(
            child: Column(
              children: [
                const ChatHeader(green: true, topic: 'Pay with Paystack'),

                const SizedBox(height: 14),

                Expanded(
                  child: isLoading
                      ? loadingState('Preparing secure payment...')
                      : webViewController == null
                      ? const Center(
                          child: Text('Failed to load payment. Try again.'),
                        )
                      : Stack(
                          children: [
                            WebViewWidget(controller: webViewController!),

                            if (isWebViewLoading)
                              Container(
                                color: Colors.white,
                                child: loadingState(
                                  'Loading Paystack checkout...',
                                ),
                              ),
                          ],
                        ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
