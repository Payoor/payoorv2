import 'package:flutter/material.dart';
import 'package:cached_network_image/cached_network_image.dart';

import '../utils/api.dart';

import '../models/product_variant.dart';

class OrderPreviewItemCard extends StatelessWidget {
  final String variantId;
  final String authToken;
  final int quantity;

  const OrderPreviewItemCard({
    super.key,
    required this.variantId,
    required this.authToken,
    required this.quantity,
  });

  String money(dynamic value) {
    final amount = double.tryParse(value?.toString() ?? '0') ?? 0;
    return '₦${amount.toStringAsFixed(0)}';
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: requestServerGet(
        '/shopper/getoption',
        queryParams: {'mongooseid': variantId},
        headers: {'Authorization': 'Bearer $authToken'},
      ),
      builder: (context, snapshot) {
        if (!snapshot.hasData) {
          return const Padding(
            padding: EdgeInsets.symmetric(vertical: 20),
            child: Center(child: CircularProgressIndicator()),
          );
        }

        final data = snapshot.data as Map<String, dynamic>;
        final variant = ProductVariant.fromJson(data['variant']);

        return Container(
          margin: const EdgeInsets.only(bottom: 12),
          height: MediaQuery.of(context).size.height * 0.14,
          decoration: BoxDecoration(
            border: Border.all(color: const Color(0xFF249B48), width: 1.5),
            borderRadius: BorderRadius.circular(14),
          ),
          child: Padding(
            padding: const EdgeInsets.all(9),
            child: Row(
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

                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(variant.unit, softWrap: true),
                      const SizedBox(height: 4),
                      Text('Price: ${money(variant.price)}'),
                      Text('Quantity: $quantity'),
                      Text(
                        'Total: ${money(variant.price * quantity)}',
                        style: const TextStyle(fontWeight: FontWeight.w700),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
