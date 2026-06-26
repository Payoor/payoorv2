import 'package:flutter/material.dart';

import '../utils/api.dart';
import '../models/product.dart';
import '../models/product_variant.dart';

class ProductsProvider extends ChangeNotifier {
  bool _isDisposed = false;
  bool _isLoading = false;
  String? _error;

  List<Product> _products = [];
  Product? _currentProduct;
  List<ProductVariant> _productVariants = [];

  int _page = 1;
  int _size = 10;
  bool _hasMore = true;
  int _total = 0;
  bool _isLoadingMore = false;

  bool get isLoading => _isLoading;
  bool get isLoadingMore => _isLoadingMore;
  String? get error => _error;
  List<Product> get products => _products;
  Product? get currentProduct => _currentProduct;
  List<ProductVariant> get productVariants => _productVariants;
  bool get hasMore => _hasMore;
  int get total => _total;

  String _lastMessage = '';

  @override
  void dispose() {
    _isDisposed = true;
    super.dispose();
  }

  void safeNotifyListeners() {
    if (!_isDisposed) {
      notifyListeners();
    }
  }

  Future<void> sendShopperMessage({
    required String message,
    int page = 1,
    int size = 10,
    bool append = false,
    String? token,
  }) async {
    if (!append && _isLoading) return;
    if (append && _isLoadingMore) return;
    if (append && !_hasMore) return;

    try {
      if (append) {
        _isLoadingMore = true;
      } else {
        _isLoading = true;
        _products = [];
      }

      _error = null;
      _lastMessage = message;
      safeNotifyListeners();

      final data = await requestServerPost(
        '/shopper/message',
        queryParams: {'page': page, 'size': size},
        headers: {if (token != null) 'Authorization': 'Bearer $token'},
        body: {'message': message},
      );

      final List rawProducts = data['products'] ?? [];

      final newProducts = rawProducts
          .map((item) => Product.fromJson(item))
          .toList();

      if (append) {
        _products.addAll(newProducts);
      } else {
        _products = newProducts;
      }

      _page = data['page'] ?? page;
      _size = data['size'] ?? size;
      _total = data['total'] ?? 0;
      _hasMore = data['hasMore'] ?? false;
    } catch (e) {
      _error = e.toString();
      print(e);
    } finally {
      if (append) {
        _isLoadingMore = false;
      } else {
        _isLoading = false;
      }

      safeNotifyListeners();
    }
  }

  Future<void> loadMoreProducts() async {
    if (_isLoading || _isLoadingMore || !_hasMore) return;
    if (_lastMessage.isEmpty) return;

    await sendShopperMessage(
      message: _lastMessage,
      page: _page + 1,
      size: _size,
      append: true,
    );
  }
}
