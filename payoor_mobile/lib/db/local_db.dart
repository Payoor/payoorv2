import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class LocalDb {
  static Database? _db;

  static Future<Database> get db async {
    if (_db != null) return _db!;

    final dbPath = await getDatabasesPath();
    final path = join(dbPath, 'payoor.db');

    _db = await openDatabase(
      path,
      version: 4,
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
          await database.execute('''
            ALTER TABLE cart_items 
            ADD COLUMN price REAL NOT NULL DEFAULT 0
          ''');
        }
      },
    );

    return _db!;
  }
}