import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/category_slide.dart';
import '../widgets/chat_input.dart';

import '../screens/product_screen.dart';
import '../screens/cart_screen.dart';

import '../providers/product_provider.dart';
import '../providers/cart_provider.dart';

import 'package:cached_network_image/cached_network_image.dart';

class HomeScreen extends StatefulWidget {
  final String authToken;

  const HomeScreen({super.key, required this.authToken});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final ScrollController _scrollController = ScrollController();

  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      context.read<ProductsProvider>().sendShopperMessage(
        message:
            'Beef, Chicken, Turkey, and fresh Fish — protein-packed goodness.',
      );
    });

    _scrollController.addListener(() {
      final provider = context.read<ProductsProvider>();

      if (_scrollController.position.pixels >=
          _scrollController.position.maxScrollExtent - 400) {
        provider.loadMoreProducts();
      }
    });
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final productsProvider = context.watch<ProductsProvider>();
    final cartProvider = context.watch<CartProvider>();

    return Scaffold(
      backgroundColor: const Color(0xFFFFFFFF),
      resizeToAvoidBottomInset: true,
      body: Stack(
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: AppLayout(
                  child: Column(
                    children: [
                      ChatHeader(green: true),

                      const SizedBox(height: 14),

                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.all(10),
                        decoration: const BoxDecoration(
                          color: Color(0xFF249B48),
                          borderRadius: BorderRadius.all(Radius.circular(10)),
                        ),
                        child: const Text(
                          "Here's what I found for protein-packed goodness",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 14,
                            fontWeight: FontWeight.w400,
                          ),
                        ),
                      ),

                      const SizedBox(height: 20),

                      Expanded(
                        child:
                            productsProvider.isLoading &&
                                productsProvider.products.isEmpty
                            ? const Center(child: CircularProgressIndicator())
                            : GridView.builder(
                                controller: _scrollController,
                                gridDelegate:
                                    const SliverGridDelegateWithFixedCrossAxisCount(
                                      crossAxisCount: 2,
                                      crossAxisSpacing: 12,
                                      mainAxisSpacing: 12,
                                      childAspectRatio: 0.7,
                                    ),
                                itemCount:
                                    productsProvider.products.length +
                                    (productsProvider.isLoadingMore ? 1 : 0),
                                itemBuilder: (context, index) {
                                  if (index >=
                                      productsProvider.products.length) {
                                    return const Center(
                                      child: Padding(
                                        padding: EdgeInsets.all(20),
                                        child: CircularProgressIndicator(),
                                      ),
                                    );
                                  }

                                  final product =
                                      productsProvider.products[index];

                                  return Container(
                                    clipBehavior: Clip.hardEdge,
                                    decoration: BoxDecoration(
                                      color: Colors.transparent,
                                      borderRadius: BorderRadius.circular(16),
                                    ),
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.stretch,
                                      children: [
                                        Expanded(
                                          child: CachedNetworkImage(
                                            imageUrl: product.image,
                                            fit: BoxFit.cover,

                                            placeholder: (context, url) =>
                                                Image.asset(
                                                  'assets/images/loading.jpg',
                                                  fit: BoxFit.cover,
                                                ),

                                            errorWidget:
                                                (
                                                  context,
                                                  url,
                                                  error,
                                                ) => Image.asset(
                                                  'assets/images/loading.jpg',
                                                  fit: BoxFit.cover,
                                                ),
                                          ),
                                        ),

                                        Container(
                                          padding: const EdgeInsets.all(12),
                                          decoration: const BoxDecoration(
                                            color: Color.fromRGBO(
                                              168,
                                              209,
                                              240,
                                              0.6,
                                            ),
                                          ),
                                          child: Column(
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: [
                                              Text(
                                                product.name,
                                                maxLines: 2,
                                                overflow: TextOverflow.ellipsis,
                                                style: const TextStyle(
                                                  color: Colors.black87,
                                                  fontSize: 14,
                                                  fontWeight: FontWeight.w700,
                                                ),
                                              ),

                                              const SizedBox(height: 8),

                                              Align(
                                                alignment: Alignment.centerLeft,
                                                child: ElevatedButton(
                                                  onPressed: () {
                                                    Navigator.push(
                                                      context,
                                                      MaterialPageRoute(
                                                        builder: (_) =>
                                                            ProductScreen(
                                                              productId:
                                                                  product.id,
                                                              productName:
                                                                  product.name,
                                                              productImage:
                                                                  product.image,
                                                              productMetadata:
                                                                  product
                                                                      .metadata,
                                                              productDescription:
                                                                  product
                                                                      .description,
                                                              authToken: widget
                                                                  .authToken,
                                                            ),
                                                      ),
                                                    );
                                                  },
                                                  style: ElevatedButton.styleFrom(
                                                    backgroundColor:
                                                        const Color(0xFF249B48),
                                                    foregroundColor:
                                                        Colors.white,
                                                    elevation: 0,

                                                    minimumSize: Size.zero,
                                                    tapTargetSize:
                                                        MaterialTapTargetSize
                                                            .shrinkWrap,

                                                    padding:
                                                        const EdgeInsets.symmetric(
                                                          horizontal: 12,
                                                          vertical: 6,
                                                        ),

                                                    shape: RoundedRectangleBorder(
                                                      borderRadius:
                                                          BorderRadius.circular(
                                                            20,
                                                          ),
                                                    ),
                                                  ),
                                                  child: Text(
                                                    'View ${product.variantCount} ${product.variantCount == 1 ? 'option' : 'options'}',
                                                    style: const TextStyle(
                                                      fontSize: 11,
                                                      fontWeight:
                                                          FontWeight.w600,
                                                    ),
                                                  ),
                                                ),
                                              ),

                                              const SizedBox(height: 8),

                                              Wrap(
                                                spacing: 6,
                                                runSpacing: 6,
                                                children: (product.metadata ?? '')
                                                    .split(',')
                                                    .map((item) => item.trim())
                                                    .where(
                                                      (item) => item.isNotEmpty,
                                                    )
                                                    .map(
                                                      (item) => GestureDetector(
                                                        onTap: () {
                                                          print(
                                                            'Clicked metadata: $item',
                                                          );
                                                        },
                                                        child: Container(
                                                          padding:
                                                              const EdgeInsets.symmetric(
                                                                horizontal: 8,
                                                                vertical: 4,
                                                              ),
                                                          decoration: BoxDecoration(
                                                            color: Colors.white
                                                                .withOpacity(
                                                                  0.75,
                                                                ),
                                                            borderRadius:
                                                                BorderRadius.circular(
                                                                  20,
                                                                ),
                                                          ),
                                                          child: Text(
                                                            item,
                                                            maxLines: 1,
                                                            overflow:
                                                                TextOverflow
                                                                    .ellipsis,
                                                            style:
                                                                const TextStyle(
                                                                  color: Colors
                                                                      .black87,
                                                                  fontSize: 10,
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .w500,
                                                                ),
                                                          ),
                                                        ),
                                                      ),
                                                    )
                                                    .toList(),
                                              ),
                                            ],
                                          ),
                                        ),
                                      ],
                                    ),
                                  );
                                },
                              ),
                      ),
                    ],
                  ),
                ),
              ),

              Container(
                width: double.infinity,
                decoration: const BoxDecoration(
                  color: Colors.white,
                  boxShadow: [
                    BoxShadow(
                      color: Color.fromRGBO(0, 0, 0, 0.08),
                      blurRadius: 8,
                      offset: Offset(0, -2),
                    ),
                  ],
                ),
                child: Stack(
                  clipBehavior: Clip.none,
                  children: [
                    const Padding(
                      padding: EdgeInsets.fromLTRB(16, 16, 16, 16),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Explore Categories',
                            style: TextStyle(
                              color: Colors.black87,
                              fontSize: 14,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                          SizedBox(height: 10),
                          CategorySlide(),
                        ],
                      ),
                    ),

                    Positioned(
                      top: -18,
                      right: 16,
                      child: Stack(
                        clipBehavior: Clip.none,
                        children: [
                          GestureDetector(
                            onTap: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (_) =>
                                      CartScreen(authToken: widget.authToken),
                                ),
                              );
                            },
                            child: Container(
                              width: 48,
                              height: 48,
                              decoration: BoxDecoration(
                                color: const Color(0xFF249B48),
                                borderRadius: BorderRadius.circular(100),
                                boxShadow: const [
                                  BoxShadow(
                                    color: Color.fromRGBO(0, 0, 0, 0.15),
                                    blurRadius: 10,
                                    offset: Offset(0, 4),
                                  ),
                                ],
                              ),
                              child: const Center(
                                child: Icon(
                                  Icons.shopping_bag_outlined,
                                  color: Colors.white,
                                  size: 24,
                                ),
                              ),
                            ),
                          ),

                          Positioned(
                            top: -6,
                            right: -6,
                            child: Container(
                              width: 20,
                              height: 20,
                              decoration: BoxDecoration(
                                color: Colors.white,
                                borderRadius: BorderRadius.circular(100),
                                border: Border.all(
                                  color: const Color(0xFF249B48),
                                  width: 2,
                                ),
                              ),
                              child: Center(
                                child: Text(
                                  '${cartProvider.items.length}',
                                  style: const TextStyle(
                                    color: Color(0xFF249B48),
                                    fontSize: 10,
                                    fontWeight: FontWeight.w900,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),

              const ChatInput(hintText: 'Type a message...'),
            ],
          ),

          //Positioned(child: SideNavi()),
        ],
      ),
    );
  }
}
