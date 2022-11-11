const mongoose=require("mongoose");
const testimonialSchema = mongoose.Schema({
   
  Photo:{
    type:String,
    required:true
  },
  Name:{ 
    type:String,
   required:true},
  Post:{
    type:String,
    maxLenth:10
  },
  TestimonialDescription:{
    type:String,
    maxLenth:300
  },
  CreatedOn:{
    type:String},
  LastUpdatedOn:{
    type:String
  },
  Active:{
    type:Number,
    required:true
  }
})
const testimonialModel=mongoose.model("testimonialCollection",testimonialSchema);
module.exports=testimonialModel; 