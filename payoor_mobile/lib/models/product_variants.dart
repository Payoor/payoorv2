class ProductVariant {
  final String? id;
  final String productId;
  final String image;
  final String unit;
  final double price;
  final String availability;
  final DateTime? createdAt;
  final DateTime? updatedAt;

  const ProductVariant({
    this.id,
    required this.productId,
    required this.image,
    required this.unit,
    required this.price,
    this.availability = 'YES',
    this.createdAt,
    this.updatedAt,
  });

  factory ProductVariant.fromJson(Map<String, dynamic> json) {
    return ProductVariant(
      id: json['_id'],
      productId: json['productId'] ?? '',
      image: json['image'] ?? '',
      unit: json['unit'] ?? '',
      price: (json['price'] ?? 0).toDouble(),
      availability: json['availability'] ?? 'YES',
      createdAt: json['createdAt'] != null
          ? DateTime.parse(json['createdAt'])
          : null,
      updatedAt: json['updatedAt'] != null
          ? DateTime.parse(json['updatedAt'])
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      '_id': id,
      'productId': productId,
      'image': image,
      'unit': unit,
      'price': price,
      'availability': availability,
      'createdAt': createdAt?.toIso8601String(),
      'updatedAt': updatedAt?.toIso8601String(),
    };
  }

  ProductVariant copyWith({
    String? id,
    String? productId,
    String? image,
    String? unit,
    double? price,
    String? availability,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return ProductVariant(
      id: id ?? this.id,
      productId: productId ?? this.productId,
      image: image ?? this.image,
      unit: unit ?? this.unit,
      price: price ?? this.price,
      availability: availability ?? this.availability,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }
}