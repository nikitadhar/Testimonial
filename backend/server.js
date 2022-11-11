const express =require("express");
const app=express();
const mongoose =require("mongoose")
const cors = require("cors");
app.use(cors())
const port=process.env.PORT || 3005;
const dotenv=require("dotenv")
dotenv.config({path:"./config.env"});
const router=require("./router/router")
const fileUpload=require("express-fileupload");
app.use(fileUpload({
    useTempFiles: true
  })
);
 
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.listen(port,(err)=>{
    if(!err){
    console.log("server is started at"+" "+ port)}
})
const mongodb=process.env.DATABASE;
mongoose.connect(mongodb, ()=> {
  console.log("server is connected to db")
}, (err)=> {
  console.log(err)
})
 
app.use("/user",router)