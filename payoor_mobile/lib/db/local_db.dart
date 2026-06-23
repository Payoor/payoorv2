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
      version: 1,
      onCreate: (database, version) async {
        await database.execute('''
          CREATE TABLE users (
            id TEXT PRIMARY KEY,
            email TEXT,
            phoneNumber TEXT,
            name TEXT,
            token TEXT NOT NULL
          )
        ''');
      },
    );

    return _db!;
  }
}
