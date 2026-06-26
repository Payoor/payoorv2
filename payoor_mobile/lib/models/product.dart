class Product {
  final String? id;
  final String image;
  final String? generatedDescription;
  final List<String> generatedCategories;
  final bool syncedToAlgolia;
  final String name;
  final int variantCount;
  final String? metadata;
  final String description;
  final List<String> categories;
  final DateTime? createdAt;
  final DateTime? updatedAt;

  const Product({
    this.id,
    required this.image,
    this.generatedDescription,
    this.generatedCategories = const [],
    this.syncedToAlgolia = false,
    required this.name,
    this.variantCount = 0,
    this.metadata,
    this.description = '',
    this.categories = const [],
    this.createdAt,
    this.updatedAt,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['_mongooseid'],
      image: json['image'] ?? '',
      generatedDescription: json['generatedDescription'],
      generatedCategories:
          List<String>.from(json['generatedCategories'] ?? []),
      syncedToAlgolia: json['synced_to_algolia'] ?? false,
      name: json['name'] ?? '',
      variantCount: json['variantCount'] ?? 0,
      metadata: json['metadata'],
      description: json['description'] ?? '',
      categories: List<String>.from(json['categories'] ?? []),
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
      'image': image,
      'generatedDescription': generatedDescription,
      'generatedCategories': generatedCategories,
      'synced_to_algolia': syncedToAlgolia,
      'name': name,
      'variantCount': variantCount,
      'metadata': metadata,
      'description': description,
      'categories': categories,
      'createdAt': createdAt?.toIso8601String(),
      'updatedAt': updatedAt?.toIso8601String(),
    };
  }

  Product copyWith({
    String? id,
    String? image,
    String? generatedDescription,
    List<String>? generatedCategories,
    bool? syncedToAlgolia,
    String? name,
    int? variantCount,
    String? metadata,
    String? description,
    List<String>? categories,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return Product(
      id: id ?? this.id,
      image: image ?? this.image,
      generatedDescription:
          generatedDescription ?? this.generatedDescription,
      generatedCategories:
          generatedCategories ?? this.generatedCategories,
      syncedToAlgolia: syncedToAlgolia ?? this.syncedToAlgolia,
      name: name ?? this.name,
      variantCount: variantCount ?? this.variantCount,
      metadata: metadata ?? this.metadata,
      description: description ?? this.description,
      categories: categories ?? this.categories,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }
}