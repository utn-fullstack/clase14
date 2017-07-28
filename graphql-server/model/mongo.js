const mongodb = require("mongodb"), client = mongodb.MongoClient;
const user = process.env.DBUSER;
const psw = process.env.DBPSW;
const connectionString = `mongodb://${user}:${psw}@ds131312.mlab.com:31312/fullstack-course`;

console.log(connectionString);

let promise;
let db;

const dbConnector = connectionString => {
  if (promise) {
    return promise;
  }
  console.log(`Mongo connect: ${connectionString}`);
  promise = client.connect(connectionString).then(function (database) {
    db = database;
    return db;
  });

  return promise;
};

const collection = name => {
  return dbConnector(connectionString).then(db => db.collection(name));
};

exports.dbConnector = dbConnector;
exports.collection = collection;
