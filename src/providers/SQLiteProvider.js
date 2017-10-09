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
  /*
  retrieveSQL(){
    console.log("inside the retrieveSQL");
    this.instance.transaction((tx)=>{
      console.log("inside the retrieveSQL Transaction");
      tx.executeSql('SELECT * FROM PEOPLE',[],(tx,results)=>{
        var len = results.rows.length;
        for(let i=0;i<len;i++){
          let row = results.rows.item(i);
          console.log(`Result is : ${row.NAME}`);
        }
      })
    })
  }
  insertSQL(){
    console.log("inside the insertSQL");
    this.instance.transaction((tx)=>{
      console.log("inside the insertSQL Transaction");
      tx.executeSql('INSERT INTO PEOPLE (NAME) VALUES(?)',['OZER'],(tx,results)=>{
        console.log(results);
      })
    })

  }
*/


}
