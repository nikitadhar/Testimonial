const express = require("express");
const app = express()
const testimonialModel = require("../models/schema");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'dg9uhaqlp',
    api_key: '337211444166268',
    api_secret: 'BeSl3JW_66ANq9_nNv2YoNyuMJ8'});


//add testimonial
app.post("/AddTestimonial", (req, res) => {
    const file = req.files.Photo;
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        const data = result;
        n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
        testimonialModel.create({
            TestimonialID:req.body.TestimonialID,
            Photo:data.url,
            Name:req.body.Name,
            Post:req.body.Post,
            TestimonialDescription:req.body.TestimonialDescription,
            CreatedOn:d+"/"+m+"/"+y,
            Active:1
        }).then((data) => {
            console.log(data)
        res.send("file and data uploaded successfully");
       }).catch((err) => {
        console.log(err)
                res.status(400).send(err)
            })
    })
})


////////View Testimonial(s)
 
app.get("/ViewTestimonial", (req, res) => {
    testimonialModel.find({ active: 1 })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

////////Edit Testimonial
app.patch("/editTestimonial/:id", async(req,res)=>{
    const file = req.files.Photo;
    cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
        const url = result.url;
        n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
const updated= await testimonialModel.findByIdAndUpdate({ _id: req.params.id },{ ...req.body, Photo: url,Name:req.body.Name,Active:req.body.Active,Post:req.body.Post,TestimonialDescription:req.body.TestimonialDescription,LastUpdatedOn: d+"/"+m+"/"+y },  { new: true })
      if(updated){
        console.log(updated)
      res.send("Data updated successfully");
      }
    })
})
////////Delete Testimonia (Update Active = 0)
app.patch("/delete/:id",async(req, res) => {
   await testimonialModel.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { Active: 0 } }
      )
      res.send("Data id deleted succesfully");
     
    
  });
module.exports = app