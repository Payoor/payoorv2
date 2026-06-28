import 'dart:convert';

import 'package:flutter/material.dart';

import '../repositories/checkout_repository.dart';
import '../providers/cart_provider.dart';
import '../utils/api.dart';

class CheckoutProvider extends ChangeNotifier {
  final checkoutRepository = CheckoutRepository();

  Map<String, dynamic>? checkoutData;
  String? cartHash;
  bool isLoading = false;

  String buildCartHash(List<Map<String, dynamic>> cartItems) {
    final sortedItems = [...cartItems];

    sortedItems.sort(
      (a, b) => a['variantId'].toString().compareTo(b['variantId'].toString()),
    );

    final cleanItems = sortedItems.map((item) {
      return {'variantId': item['variantId'], 'quantity': item['quantity']};
    }).toList();

    return jsonEncode(cleanItems);
  }

  Future<void> loadSavedCheckout() async {
    final saved = await checkoutRepository.getLatestCheckout();

    if (saved == null) return;

    checkoutData = saved['checkoutData'];
    cartHash = saved['cartHash'];

    notifyListeners();
  }

  void updateDeliveryAddress(String address) {
    if (checkoutData == null) return;

    final checkout = checkoutData!['checkout'] ?? {};

    checkout['delivery_address'] = address;
    checkoutData!['checkout'] = checkout;

    notifyListeners();
  }

  void updatePhoneNumber(String phoneNumber) {
    if (checkoutData == null) return;

    final checkout = checkoutData!['checkout'] ?? {};

    checkout['phone_number'] = phoneNumber;
    checkoutData!['checkout'] = checkout;

    notifyListeners();
  }

  void updateDeliveryDate(Map<String, dynamic> deliveryDate) {
    if (checkoutData == null) return;

    final checkout = checkoutData!['checkout'] ?? {};

    checkout['delivery_date'] = deliveryDate;
    checkoutData!['checkout'] = checkout;

    notifyListeners();
  }

  void updateDeliveryInstruction(String instruction) {
    if (checkoutData == null) return;

    final checkout = checkoutData!['checkout'] ?? {};

    checkout['delivery_instruction'] = instruction;
    checkoutData!['checkout'] = checkout;

    notifyListeners();
  }

  void updatePromoCode(String promoCode) {
    if (checkoutData == null) return;

    final checkout = checkoutData!['checkout'] ?? {};

    checkout['promo_code'] = promoCode;
    checkoutData!['checkout'] = checkout;

    notifyListeners();
  }

  Future<Map<String, dynamic>> updateCheckout(String authToken) async {
    if (checkoutData == null) {
      throw Exception('No checkout available');
    }

    final Map<String, dynamic> checkout = Map<String, dynamic>.from(
      checkoutData!['checkout'] as Map,
    );

    final String checkoutId = checkout['_id'].toString();

    if (checkoutId.isEmpty) {
      throw Exception('Missing checkout id');
    }

    final data = await requestServerPost(
      '/shopper/update/checkout',
      queryParams: {'checkoutId': checkoutId},
      body: {
        'checkout': {
          'delivery_address': checkout['delivery_address'] ?? '',
          'delivery_date': checkout['delivery_date'],
          'delivery_instruction': checkout['delivery_instruction'] ?? '',
          'promo_code': checkout['promo_code'] ?? '',
          'phone_number': checkout['phone_number'] ?? '',
        },
      },
      headers: {'Authorization': 'Bearer $authToken'},
    );

    final Map<String, dynamic> updatedCheckout = Map<String, dynamic>.from(
      data['updatedCheckout'] as Map,
    );

    checkoutData!['checkout'] = {...checkout, ...updatedCheckout};

    notifyListeners();

    return data;
  }

  Future<Map<String, dynamic>> generatePaystackLink(String authToken) async {
    if (checkoutData == null) {
      throw Exception('No checkout available');
    }

    final checkout = checkoutData!['checkout'];

    final checkoutId = checkout['_id']?.toString();

    if (checkoutId == null || checkoutId.isEmpty) {
      throw Exception('Missing checkout id');
    }

    final data = await requestServerGet(
      '/shopper/paystack/generate-paystack-link',
      queryParams: {'checkout_id': checkoutId},
      headers: {'Authorization': 'Bearer $authToken'},
    );

    return data;
  }

  Future<Map<String, dynamic>> updateCheckoutAndGeneratePaystackLink(
    String authToken,
  ) async {
    await updateCheckout(authToken);

    final paystackData = await generatePaystackLink(authToken);

    return paystackData;
  }

  Future<Map<String, dynamic>> getOrCreateCheckout({
    required String authToken,
    required CartProvider cartProvider,
  }) async {
    final newCartHash = buildCartHash(cartProvider.items);

    if (checkoutData != null && cartHash == newCartHash) {
      return checkoutData!;
    }

    isLoading = true;
    notifyListeners();

    try {
      final Map<String, int> checkoutItems = {
        for (final item in cartProvider.items)
          item['variantId'].toString(): item['quantity'] as int,
      };

      final data = await requestServerPost(
        '/shopper/checkout/create',
        body: {'items': checkoutItems},
        headers: {'Authorization': 'Bearer $authToken'},
      );

      final checkout = data['checkout'];
      final checkoutId = checkout['_id'].toString();

      checkoutData = data;
      cartHash = newCartHash;

      await checkoutRepository.saveCheckout(
        checkoutId: checkoutId,
        cartHash: newCartHash,
        checkoutData: data,
      );

      return data;
    } finally {
      isLoading = false;
      notifyListeners();
    }
  }

  Future<void> clearCheckout() async {
    checkoutData = null;
    cartHash = null;

    await checkoutRepository.clearCheckout();

    notifyListeners();
  }
}
