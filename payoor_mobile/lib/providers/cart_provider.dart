import 'package:flutter/material.dart';

import '../repositories/cart_repository.dart';

class CartProvider extends ChangeNotifier {
  final cartRepository = CartRepository();

  List<Map<String, dynamic>> items = [];
  double total = 0;

  int getQuantity(String variantId) {
    final matches = items.where(
      (item) => item['variantId'] == variantId,
    );

    if (matches.isEmpty) return 0;

    return matches.first['quantity'] as int;
  }

  void calculateTotal() {
    total = items.fold<double>(
      0,
      (sum, item) =>
          sum +
          ((item['price'] as num).toDouble() *
              (item['quantity'] as int)),
    );
  }

  Future<void> loadCart() async {
    items = await cartRepository.getItems();

    calculateTotal();

    notifyListeners();
  }

  Future<void> addItem(
    String variantId,
    double price,
  ) async {
    await cartRepository.addItem(variantId, price);

    items = await cartRepository.getItems();

    calculateTotal();

    notifyListeners();
  }

  Future<void> decreaseItem(String variantId) async {
    await cartRepository.decreaseQuantity(variantId);

    items = await cartRepository.getItems();

    calculateTotal();

    notifyListeners();
  }

  Future<void> removeItem(String variantId) async {
    await cartRepository.removeItem(variantId);

    items = await cartRepository.getItems();

    calculateTotal();

    notifyListeners();
  }

  Future<void> clearCart() async {
    await cartRepository.clearCart();

    items.clear();
    total = 0;

    notifyListeners();
  }
}