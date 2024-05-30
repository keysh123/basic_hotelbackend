const express = require('express');
const app = express();
const db=require('./db');
// const person=require('./models/person');
// const menu=require('./models/menu');

const bodyParser=require('body-parser');
app.use(bodyParser.json())  //req.body

app.get('/', function (req, res) {
  res.send('Hello World')
});
// app.get('/idli', function (req, res) {
//   res.send('idli price-> 90')
// });
// app.post('/person',async(req,res)=>{
//   // const data=req.body

//   // const newPerson=new person();
//   // newPerson.name=data.name;
//   // newPerson.age=data.age;
//   // newPerson.mobile=data.mobile;
//   // newPerson.work=data.work;
//   // newPerson.email=data.email;

//   // newPerson.save((error,person)=>{
//   //   if(error){
//   //     console.log(error);
//   //     res.json({error : 'error'});
//   //   }
//   //   else{
//   //     console.log("data saved successfully!!");
//   //     res.json(person);
//   //   }
//   // })

//   try{
//     const data=req.body

//     const newPerson=new person();
//   newPerson.name=data.name;
//   newPerson.age=data.age;
//   newPerson.mobile=data.mobile;
//   newPerson.work=data.work;
//   newPerson.email=data.email;
//     const response=await newPerson.save();

//     res.json(response)
//   }
//   catch(err){
//     console.log("error",err);
//   }
  
// });
// app.post('/menu',async(req,res)=>{
//   try{
//     const data=req.body

//   const newmenu=new menu(data);
//   // newPerson.name=data.name;
//   // newPerson.age=data.age;
//   // newPerson.mobile=data.mobile;
//   // newPerson.work=data.work;
//   // newPerson.email=data.email;
//     const response=await newmenu.save();

//     res.json(response)
//   }
//   catch(err){
//     console.log("error",err);
//   }
  
// });
// app.get('/menu',async(req,res)=>{
//   try{
//     const data=await menu.find();
//     res.json(data);
//   }
//   catch(err){
//     console.log(err);
//   }
// })
// app.get('/person',async(req,res)=>{
//   try{
//     const data=await person.find();
//     res.json(data);
//   }
//   catch(err){
//     console.log(err);
//   }
// })

// app.get('/person/:work',async(req,res)=>{
//   try{
//   const type=req.params.work;
//   if(type=="chef" || type=="manager" || type=="waiter"){
//     const response=await person.find({work : type});
//     res.json(response);
//   }
//   else{
//     res.status(404).json("invalid");
//   }
// }
// catch(err){
//   console.log(err);
// }
// })
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');

app.use('/person',personRoutes);
app.use('/menu',menuRoutes);
app.listen(3000)