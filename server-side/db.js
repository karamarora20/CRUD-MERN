const {MongoClient} = require('mongodb');
const url= "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
module.exports.connect_db= async()=>{
    await client.connect();
    console.log("connected to database");
    let db = client.db("form_data");
    let collection = db.collection("user_data");
    return db;
}
module.exports.close_db= async()=>{
    await client.close();
    console.log("closed connection with database");
}
module.exports.insert_data= async(data)=>{
    let db = await this.connect_db();
    let collection = db.collection("user_data");
    await collection.insertOne(data);
    await this.close_db();
}
module.exports.update_data= async(enroll,data)=>{
    let db = await this.connect_db();
    let collection = db.collection("user_data");
    await collection.update(({Enrollment:enroll},{$set:data}));
    await this.close_db();

}
module.exports.delete_data= async(enroll)=>{
    let db = await this.connect_db();
    let collection = db.collection("user_data");
    await collection.update(({Enrollment:enroll},{$set:data}));
    await this.close_db();
}
module.exports.read_data= async(enroll)=>{
    let db = await this.connect_db();
    let collection = db.collection("user_data");
    let record= collection.find({Enrollment:enroll});
    return record;
    await this.close_db();
}