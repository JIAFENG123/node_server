/*
 * @Descripttion: 
 * @version: 
 * @Author: 贾峰
 * @Date: 2020-07-22 14:09:20
 * @LastEditors: 贾峰
 * @LastEditTime: 2020-07-22 17:01:02
 */ 
/*
 * @Descripttion: 
 * @version: 
 * @Author: 贾峰
 * @Date: 2020-07-22 14:09:20
 * @LastEditors: 贾峰
 * @LastEditTime: 2020-07-22 16:46:11
 */ 

const MongoClient = require('mongodb').MongoClient;
        const assert = require('assert');
        
        // Connection URL
        const url = 'mongodb://localhost:27017';
        
        // Database Name
        const dbName = 'test';
        
        // Create a new MongoClient
        const client = new MongoClient(url);
module.exports = {
    db: () => {
        // Use connect method to connect to the Server
        client.connect(function(err) {
          assert.equal(null, err);
          console.log("Connected successfully to server");
          const dbclient = client.db(dbName);
          client.close();
        });
    },
    client,
    assert
} 