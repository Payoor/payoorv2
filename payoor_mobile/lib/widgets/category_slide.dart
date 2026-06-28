import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../models/category.dart';
import '../utils/api.dart';
import '../providers/product_provider.dart';

class CategorySlide extends StatefulWidget {
  const CategorySlide({super.key});

  @override
  State<CategorySlide> createState() => _CategorySlideState();
}

class _CategorySlideState extends State<CategorySlide> {
  bool isLoading = false;
  String? error;
  List<Category> categories = [];
  String? selectedCategoryId;

  static const double gap = 12;

  @override
  void initState() {
    super.initState();
    fetchCategories();
  }

  Color parseHexColor(String hexColor) {
    var hex = hexColor.replaceAll('#', '').trim();

    if (hex.length == 6) {
      hex = 'FF$hex';
    }

    return Color(int.parse(hex, radix: 16));
  }

  String shortText(String value, int max) {
    if (value.length <= max) return value;
    return '${value.substring(0, max)}...';
  }

  Future<void> fetchCategories() async {
    try {
      setState(() {
        isLoading = true;
        error = null;
      });

      final data = await requestServerGet(
        '/shop/categories',
        queryParams: {'page': 1, 'limit': 20},
      );

      final List rawCategories = data['categories'] ?? [];

      final parsedCategories = rawCategories
          .map((item) => Category.fromJson(item))
          .toList();

      setState(() {
        categories = parsedCategories;

        if (parsedCategories.isNotEmpty) {
          selectedCategoryId = parsedCategories.first.id;

          context.read<ProductsProvider>().sendShopperMessage(
            message: parsedCategories.first.description,
          );
        }
      });
    } catch (e) {
      setState(() {
        error = e.toString();
      });
      print(e);
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final productsProvider = context.read<ProductsProvider>();

    if (isLoading) {
      return const SizedBox(
        height: 90,
        child: Center(child: CircularProgressIndicator()),
      );
    }

    if (error != null) {
      return Text(error!, style: const TextStyle(color: Colors.red));
    }

    return SizedBox(
      height: 64,
      child: LayoutBuilder(
        builder: (context, constraints) {
          final cardWidth = (constraints.maxWidth - gap) / 2;

          return ListView.separated(
            scrollDirection: Axis.horizontal,
            itemCount: categories.length,
            separatorBuilder: (context, index) => const SizedBox(width: gap),
            itemBuilder: (context, index) {
              final category = categories[index];
              final isSelected = selectedCategoryId == category.id;

              return GestureDetector(
                onTap: () {
                  setState(() {
                    selectedCategoryId = category.id;
                  });

                  productsProvider.sendShopperMessage(
                    message: category.description,
                  );
                },
                child: Container(
                  width: cardWidth,
                  padding: const EdgeInsets.symmetric(
                    horizontal: 8,
                    vertical: 4,
                  ),
                  decoration: BoxDecoration(
                    color: parseHexColor(category.hexcolor),
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(
                      color: isSelected
                          ? const Color(0xFF249B48)
                          : Colors.transparent,
                      width: 1.5,
                    ),
                  ),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      ClipOval(
                        child: Image.network(
                          category.image,
                          width: 28,
                          height: 28,
                          fit: BoxFit.cover,
                        ),
                      ),

                      const SizedBox(width: 6),

                      Expanded(
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              category.name,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: const TextStyle(
                                color: Colors.black87,
                                fontSize: 11,
                                fontWeight: FontWeight.w700,
                                height: 1.0,
                              ),
                            ),

                            const SizedBox(height: 2),

                            Text(
                              shortText(category.description, 18),
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: const TextStyle(
                                color: Colors.black87,
                                fontSize: 8,
                                fontWeight: FontWeight.w400,
                                height: 1.0,
                              ),
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
        },
      ),
    );
  }
}
