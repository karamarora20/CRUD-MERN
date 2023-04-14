const express= require('express');
const app = express();
const cors= require('cors')
const bodyParser = require('body-parser');
db=require('./db.js');

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.set("port", 4000);
// db.connect_db();
app.post("/create",function(req,res){
    db.insert_data(req.body);
   console.log(req.body);
    res.send({"msg":'created Successfully'})});
app.post("/update",function(req,res){
    db.update_data(req.body.Enrollment,req.body);
    res.send({"msg":'updated Successfully'})

});
app.post("/delete",function(req,res){
    db.delete_data(req.body.Enrollment);
    res.send({"msg":'deleted Successfully'})
});
app.post("/read",function(req,res){
    data=db.read_data(req.body.Enrollment);
    res.send({data})
});


app.listen(app.get("port"));

console.log("Server on port", app.get("port"));

// export default app;
