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
app.post("/create",function(req,res){
    db.connect_db();
   console.log(req.body);
    res.send({"msg":'oooooofffffff'})});
app.post("/update",function(req,res){});
app.post("/delete",function(req,res){});
app.post("/read",function(req,res){});


app.listen(app.get("port"));

console.log("Server on port", app.get("port"));

// export default app;
