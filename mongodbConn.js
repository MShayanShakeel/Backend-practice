const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dataBaseName = 'Testdb';


async function dbConnection () {
  let clientConnToDb = await  client.connect();
  let db = clientConnToDb.db(dataBaseName);
  return db.collection('Products');
}

module.exports = dbConnection;