import 'package:sqflite/sqflite.dart';

import '../db/local_db.dart';
import '../models/user.dart';

class UserRepository {
  static const String tableName = 'users';

  Future<void> saveUser(User user) async {
    final db = await LocalDb.db;

    await db.insert(
      tableName,
      user.toJson(),
      conflictAlgorithm: ConflictAlgorithm.replace,
    );
  }

  Future<User?> getUser() async {
    final db = await LocalDb.db;

    final rows = await db.query(
      tableName,
      limit: 1,
    );

    if (rows.isEmpty) return null;

    return User.fromJson(rows.first);
  }

  Future<String?> getToken() async {
    final user = await getUser();

    return user?.token;
  }

  Future<void> deleteUser() async {
    final db = await LocalDb.db;

    await db.delete(tableName);
  }

  Future<bool> hasUser() async {
    final user = await getUser();

    return user != null;
  }
}