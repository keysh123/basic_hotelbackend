const express=require('express');
const router=express.Router();
const person=require('../models/person');
router.post('',async(req,res)=>{
    try{
      const data=req.body
  
      const newPerson=new person();
    newPerson.name=data.name;
    newPerson.age=data.age;
    newPerson.mobile=data.mobile;
    newPerson.work=data.work;
    newPerson.email=data.email;
      const response=await newPerson.save();
  
      res.json(response)
    }
    catch(err){
      console.log("error",err);
    }
    
  });
  router.get('',async(req,res)=>{
    try{
      const data=await person.find();
      res.json(data);
    }
    catch(err){
      console.log(err);
    }
  })

  router.get('/:work',async(req,res)=>{
    try{
    const type=req.params.work;
    if(type=="chef" || type=="manager" || type=="waiter"){
      const response=await person.find({work : type});
      res.json(response);
    }
    else{
      res.status(404).json("invalid");
    }
  }
  catch(err){
    console.log(err);
  }
  })
router.put('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const updateddata=req.body;

        const response=await person.findByIdAndUpdate(id,updateddata,{
            new : true, //return updated data
            runValidators :true 
        })

        res.json(response);
    }
    catch(err){
        console.log(err);
    }
})

module.exports=router;