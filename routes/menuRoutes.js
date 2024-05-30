const express=require('express');
const router=express.Router();
const menu=require('../models/menu');
router.post('',async(req,res)=>{
    try{
      const data=req.body
  
    const newmenu=new menu(data);
      const response=await newmenu.save();
  
      res.json(response)
    }
    catch(err){
      console.log("error",err);
    }
    
  });
  router.get('',async(req,res)=>{
    try{
      const data=await menu.find();
      res.json(data);
    }
    catch(err){
      console.log(err);
    }
  })
  module.exports=router