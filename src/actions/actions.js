import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, DELETING_DATA, INSERTING_DATA, INSERTING_DATA_SUCCESS, INSERTING_DATA_FAILURE, GET_NAME } from '../constants'

import SQLiteProvider from '../providers/SQLiteProvider';
var SQLiteObj = SQLiteProvider.getInstance();

// FETCHING_DATA
export function fetchData() {
  return dispath => {
    SQLiteObj.transaction((tx)=>{
      console.log("inside the retrieveSQL Transaction");
      tx.executeSql('SELECT * FROM PEOPLE',[],(tx,results)=>{
        var len = results.rows.length;
        var rows = [];
        for(let i=0;i<len;i++){
          let row = results.rows.item(i);
          rows.push(row);
          console.log(`Result is : ${row.NAME}`);
        }
        dispath({
          type : FETCHING_DATA,
          payload : rows
        })
      })
    })
  }
}
export function getName( name ){
  return dispath=>{
    console.log("isim : "+name);
    SQLiteObj.transaction((tx)=>{
      tx.executeSql('INSERT INTO PEOPLE (NAME) VALUES(?)',[name],(tx,results)=>{
        dispath({
          type : GET_NAME,
          payload : results,
          name
        })
      })
    })
  }
}
// INSERTING_DATA
export function insertData(){
  return dispath => {
    SQLiteObj.transaction((tx)=>{
      console.log("Inside the insertdataSQL transaction...");
      tx.executeSql('INSERT INTO PEOPLE (NAME) VALUES (?)',['mert'],(tx,results)=>{
        console.log("Insert Results : "+results);
        dispath({
          type : INSERTING_DATA,
          payload : results
        })
      })
    })
  }
}

export function deleteData(){
  console.log("SİLME İŞLEMİ")
  return dispath => {
    SQLiteObj.transaction((tx)=>{
      tx.executeSql("DELETE FROM PEOPLE",[],(tx,results)=>{
        console.log("Delete operation result : "+ results);
        dispath({
          type : DELETING_DATA,
          payload : results
        })
      })
    })
  }
}
