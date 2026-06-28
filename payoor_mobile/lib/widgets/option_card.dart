import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:cached_network_image/cached_network_image.dart';

import '../models/product_variant.dart';
import '../utils/api.dart';

import '../providers/cart_provider.dart';

class OptionCard extends StatefulWidget {
  final ProductVariant? variant;
  final String? variantId;
  final String? authToken;

  const OptionCard({super.key, this.variant, this.variantId, this.authToken});

  @override
  State<OptionCard> createState() => _OptionCardState();
}

class _OptionCardState extends State<OptionCard> {
  ProductVariant? loadedVariant;
  bool isLoadingVariant = false;

  String get variantId => widget.variantId ?? widget.variant?.id ?? '';

  @override
  void initState() {
    super.initState();

    loadedVariant = widget.variant;

    if (loadedVariant == null && variantId.isNotEmpty) {
      loadVariant();
    }
  }

  Future<void> loadVariant() async {
    if (variantId.isEmpty || widget.authToken == null) return;

    try {
      setState(() => isLoadingVariant = true);

      final data = await requestServerGet(
        '/shopper/getoption',
        queryParams: {'mongooseid': variantId},
        headers: {'Authorization': 'Bearer ${widget.authToken}'},
      );

      if (!mounted) return;

      setState(() {
        loadedVariant = ProductVariant.fromJson(data['variant']);
      });
    } catch (e) {
      print('Variant error: $e');
    } finally {
      if (mounted) {
        setState(() => isLoadingVariant = false);
      }
    }
  }

  Future<void> increaseQuantity() async {
    if (variantId.isEmpty || loadedVariant == null) return;

    await context.read<CartProvider>().addItem(variantId, loadedVariant!.price);
  }

  Future<void> decreaseQuantity() async {
    if (variantId.isEmpty) return;

    await context.read<CartProvider>().decreaseItem(variantId);
  }

  Future<void> removeItem() async {
    if (variantId.isEmpty) return;

    await context.read<CartProvider>().removeItem(variantId);
  }

  @override
  Widget build(BuildContext context) {
    final variant = loadedVariant;
    final cartProvider = context.watch<CartProvider>();
    final quantity = cartProvider.getQuantity(variantId);

    if (isLoadingVariant) {
      return const Padding(
        padding: EdgeInsets.symmetric(vertical: 20),
        child: Center(child: CircularProgressIndicator()),
      );
    }

    if (variant == null) {
      return const SizedBox();
    }

    return Column(
      children: [
        Container(
          height: MediaQuery.of(context).size.height * 0.14,
          decoration: BoxDecoration(
            border: Border.all(color: const Color(0xFF249B48), width: 1.5),
            borderRadius: BorderRadius.circular(14),
          ),
          child: Padding(
            padding: const EdgeInsets.all(9),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    SizedBox(
                      width: MediaQuery.of(context).size.width * 0.27,
                      height: double.infinity,
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(12),
                        child: CachedNetworkImage(
                          imageUrl: variant.image,
                          fit: BoxFit.cover,
                          placeholder: (context, url) => Image.asset(
                            'assets/images/loading.jpg',
                            fit: BoxFit.cover,
                          ),
                          errorWidget: (context, url, error) => Image.asset(
                            'assets/images/loading.jpg',
                            fit: BoxFit.cover,
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(width: 10),
                    SizedBox(
                      width: MediaQuery.of(context).size.width * 0.25,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(variant.unit, softWrap: true),
                          const SizedBox(height: 5),
                          Text('₦ ${variant.price}'),
                        ],
                      ),
                    ),
                  ],
                ),

                Column(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    GestureDetector(
                      onTap: removeItem,
                      child: Container(
                        padding: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                          border: Border.all(
                            color: const Color.fromRGBO(0, 0, 0, 0.15),
                            width: 1.5,
                          ),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: const Icon(
                          Icons.delete_outline_rounded,
                          color: Color.fromRGBO(0, 0, 0, 0.5),
                          size: 20,
                        ),
                      ),
                    ),

                    Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        GestureDetector(
                          onTap: decreaseQuantity,
                          child: Container(
                            padding: const EdgeInsets.all(6),
                            decoration: BoxDecoration(
                              border: Border.all(
                                color: const Color(0xFF249B48),
                                width: 1.5,
                              ),
                              borderRadius: BorderRadius.circular(10),
                            ),
                            child: const Icon(
                              Icons.remove,
                              size: 18,
                              color: Color(0xFF249B48),
                            ),
                          ),
                        ),

                        const SizedBox(width: 12),

                        Text(
                          '$quantity',
                          style: const TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w600,
                            color: Colors.black87,
                          ),
                        ),

                        const SizedBox(width: 12),

                        GestureDetector(
                          onTap: increaseQuantity,
                          child: Container(
                            padding: const EdgeInsets.all(6),
                            decoration: BoxDecoration(
                              border: Border.all(
                                color: const Color(0xFF249B48),
                                width: 1.5,
                              ),
                              borderRadius: BorderRadius.circular(10),
                            ),
                            child: const Icon(
                              Icons.add,
                              size: 18,
                              color: Color(0xFF249B48),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 20),
      ],
    );
  }
}