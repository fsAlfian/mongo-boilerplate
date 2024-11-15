const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.url);
const dbName = process.env.dbName;
let db;
let collection = {};
async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  db = client.db(dbName);
  collection["user"] = db.collection("users");
  return;
}

module.exports = { main, collection };
