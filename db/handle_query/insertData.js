/*
 * @Descripttion: 
 * @version: 
 * @Author: 贾峰
 * @Date: 2020-07-22 14:36:05
 * @LastEditors: 贾峰
 * @LastEditTime: 2020-07-22 16:25:24
 */ 

const insertDocuments = function(db,assert,data, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany(data, function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }
  module.exports = insertDocuments