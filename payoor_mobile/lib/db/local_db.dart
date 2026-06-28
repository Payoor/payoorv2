import 'package:path/path.dart';
import 'package:sqflite/sqflite.dart';

class LocalDb {
  static Database? _db;

  static Future<Database> get db async {
    if (_db != null) return _db!;

    final dbPath = await getDatabasesPath();
    final path = join(dbPath, 'payoor.db');

    _db = await openDatabase(
      path,
      version: 5,
      onCreate: (database, version) async {
        await database.execute('''
          CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            email TEXT,
            phoneNumber TEXT,
            name TEXT,
            token TEXT NOT NULL
          )
        ''');

        await database.execute('''
          CREATE TABLE IF NOT EXISTS cart_items (
            variantId TEXT PRIMARY KEY,
            quantity INTEGER NOT NULL,
            price REAL NOT NULL DEFAULT 0
          )
        ''');

        await database.execute('''
          CREATE TABLE IF NOT EXISTS checkouts (
            id TEXT PRIMARY KEY,
            cartHash TEXT NOT NULL,
            checkoutJson TEXT NOT NULL,
            updatedAt TEXT NOT NULL
          )
        ''');
      },
      onUpgrade: (database, oldVersion, newVersion) async {
        if (oldVersion < 3) {
          await database.execute('''
            CREATE TABLE IF NOT EXISTS cart_items (
              variantId TEXT PRIMARY KEY,
              quantity INTEGER NOT NULL,
              price REAL NOT NULL DEFAULT 0
            )
          ''');
        }

        if (oldVersion < 4) {
          final columns = await database.rawQuery(
            'PRAGMA table_info(cart_items)',
          );

          final hasPrice = columns.any((column) => column['name'] == 'price');

          if (!hasPrice) {
            await database.execute('''
              ALTER TABLE cart_items
              ADD COLUMN price REAL NOT NULL DEFAULT 0
            ''');
          }
        }

        if (oldVersion < 5) {
          await database.execute('''
            CREATE TABLE IF NOT EXISTS checkouts (
              id TEXT PRIMARY KEY,
              cartHash TEXT NOT NULL,
              checkoutJson TEXT NOT NULL,
              updatedAt TEXT NOT NULL
            )
          ''');
        }
      },
    );

    return _db!;
  }
}
