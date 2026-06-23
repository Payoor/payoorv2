class User {
  final String id;
  final String? email;
  final String? phoneNumber;
  final String? name;
  final String token;

  User({
    required this.id,
    this.email,
    this.phoneNumber,
    this.name,
    required this.token,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['id'] ?? '',
      email: json['email'],
      phoneNumber: json['phoneNumber'],
      name: json['name'],
      token: json['token'] ?? '',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'email': email,
      'phoneNumber': phoneNumber,
      'name': name,
      'token': token,
    };
  }
}