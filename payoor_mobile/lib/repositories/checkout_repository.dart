import 'dart:convert';
import 'package:sqflite/sqflite.dart';

import '../db/local_db.dart';

class CheckoutRepository {
  static const String tableName = 'checkouts';

  Future<void> saveCheckout({
    required String checkoutId,
    required String cartHash,
    required Map<String, dynamic> checkoutData,
  }) async {
    final db = await LocalDb.db;

    await db.insert(
      tableName,
      {
        'id': checkoutId,
        'cartHash': cartHash,
        'checkoutJson': jsonEncode(checkoutData),
        'updatedAt': DateTime.now().toIso8601String(),
      },
      conflictAlgorithm: ConflictAlgorithm.replace,
    );
  }

  Future<Map<String, dynamic>?> getLatestCheckout() async {
    final db = await LocalDb.db;

    final rows = await db.query(
      tableName,
      orderBy: 'updatedAt DESC',
      limit: 1,
    );

    if (rows.isEmpty) return null;

    return {
      'id': rows.first['id'],
      'cartHash': rows.first['cartHash'],
      'checkoutData': jsonDecode(rows.first['checkoutJson'] as String),
    };
  }

  Future<void> clearCheckout() async {
    final db = await LocalDb.db;
    await db.delete(tableName);
  }
}