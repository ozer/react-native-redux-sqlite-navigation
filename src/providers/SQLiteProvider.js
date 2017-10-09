import SQLite from 'react-native-sqlite-storage';
// Singleton pattern used 
export default class SQLiteProvider {

  static instance = null;
  static db = null;
  static createInstance(){
    var db = SQLite.openDatabase("test.db", "1.0", "Test Database", 200000, this.openCB, this.errorCB);
    return db;
  }
  static getInstance(){
    if  ( !SQLiteProvider.instance){
      SQLiteProvider.instance = SQLiteProvider.createInstance();
    }
    return SQLiteProvider.instance;
  }
  errorCB(err){
    console.log("SQLite Error : "+err);
  }
  openCB(){
    console.log("Database OPENED!");
  }



}
