const {MongoClient} = require('mongodb');
const url= "mongodb://localhost:27017";
const client = new MongoClient(url);
module.exports.connect_db= async()=>{
    await client.connect();
    console.log("connected to database");
    const db = client.db("test");
    return db;
}
module.exports.close_db= async()=>{
    await client.close();
    console.log("closed connection with database");
}