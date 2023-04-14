const {MongoClient} = require('mongodb');
const url= "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
module.exports.connect_db= async()=>{
    await client.connect();
    console.log("connected to database");
    let db = client.db("form_data");
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
    console.log('request serviced')
    await this.close_db();
}
module.exports.update_data= async(enroll,data)=>{
    let db = await this.connect_db();
    let collection = db.collection("user_data");
    const { Name, Email, Address, City, Phone, Enrollment } = data;
    let query = { Enrollment: Enrollment };
    let update = {
      $set: {
        Name: Name,
        Email: Email,
        Address: Address,
        City: City,
        Phone: Phone
      }
    };
    await collection.updateOne(query, update);
    console.log('request serviced');
    await this.close_db();

}
module.exports.delete_data= async(enroll)=>{
    let db = await this.connect_db();
    let collection = db.collection("user_data");
    await collection.deleteOne(({Enrollment:enroll}));
    console.log('request serviced')
   
}
module.exports.read_data= async function (data) {
    const { Enrollment } = data;
    
    try {
      const db = await this.connect_db();
      const collection = db.collection("user_data");
      const record = await collection.findOne({ Enrollment: Enrollment });
      console.log('request serviced');
    //   return(record.toJSON());
    return record;
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving user data.");
    }
  }