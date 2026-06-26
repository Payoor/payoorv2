import '../db/local_db.dart';

class CartRepository {
  static const String tableName = 'cart_items';

  Future<void> addItem(String variantId, double price) async {
    final db = await LocalDb.db;

    final existing = await db.query(
      tableName,
      where: 'variantId = ?',
      whereArgs: [variantId],
      limit: 1,
    );

    if (existing.isEmpty) {
      await db.insert(tableName, {
        'variantId': variantId,
        'quantity': 1,
        'price': price,
      });
    } else {
      await increaseQuantity(variantId, price);
    }
  }

  Future<List<Map<String, dynamic>>> getItems() async {
    final db = await LocalDb.db;
    return db.query(tableName);
  }

  Future<void> increaseQuantity(String variantId, double price) async {
    final db = await LocalDb.db;

    await db.rawUpdate(
      '''
      UPDATE $tableName
      SET quantity = quantity + 1,
          price = ?
      WHERE variantId = ?
      ''',
      [price, variantId],
    );
  }

  Future<void> decreaseQuantity(String variantId) async {
    final db = await LocalDb.db;

    await db.rawUpdate(
      '''
      UPDATE $tableName
      SET quantity = quantity - 1
      WHERE variantId = ? AND quantity > 1
      ''',
      [variantId],
    );
  }

  Future<void> removeItem(String variantId) async {
    final db = await LocalDb.db;

    await db.delete(tableName, where: 'variantId = ?', whereArgs: [variantId]);
  }

  Future<void> clearCart() async {
    final db = await LocalDb.db;
    await db.delete(tableName);
  }
}
