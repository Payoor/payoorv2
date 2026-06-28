import 'package:flutter/material.dart';

import '../utils/api.dart';
import '../repositories/cart_repository.dart';

class CartProvider extends ChangeNotifier {
  final cartRepository = CartRepository();

  List<Map<String, dynamic>> items = [];
  double total = 0;

  int get itemCount {
    return items.fold<int>(
      0,
      (sum, item) => sum + (int.tryParse(item['quantity'].toString()) ?? 0),
    );
  }

  int getQuantity(String variantId) {
    final matches = items.where((item) => item['variantId'] == variantId);

    if (matches.isEmpty) return 0;

    return int.tryParse(matches.first['quantity'].toString()) ?? 0;
  }

  void calculateTotal() {
    total = items.fold<double>(0, (sum, item) {
      final price = double.tryParse(item['price'].toString()) ?? 0;
      final quantity = int.tryParse(item['quantity'].toString()) ?? 0;

      return sum + (price * quantity);
    });
  }

  Future<void> refreshCart() async {
    final rows = await cartRepository.getItems();

    items = rows.map((item) => Map<String, dynamic>.from(item)).toList();

    calculateTotal();
  }

  Future<void> loadCart() async {
    await refreshCart();
    notifyListeners();
  }

  Future<void> addItem(String variantId, double price) async {
    await cartRepository.addItem(variantId, price);

    await refreshCart();

    notifyListeners();
  }

  Future<void> decreaseItem(String variantId) async {
    await cartRepository.decreaseQuantity(variantId);

    await refreshCart();

    notifyListeners();
  }

  Future<void> removeItem(String variantId) async {
    await cartRepository.removeItem(variantId);

    await refreshCart();

    notifyListeners();
  }

  Future<Map<String, dynamic>> createCheckout(String authToken) async {
    final Map<String, int> checkoutItems = {
      for (final item in items)
        item['variantId'].toString():
            int.tryParse(item['quantity'].toString()) ?? 0,
    };

    final data = await requestServerPost(
      '/shopper/checkout/create',
      body: {'items': checkoutItems},
      headers: {'Authorization': 'Bearer $authToken'},
    );

    return data;
  }

  Future<void> clearCart() async {
    await cartRepository.clearCart();

    items = [];
    total = 0;

    notifyListeners();
  }
}
