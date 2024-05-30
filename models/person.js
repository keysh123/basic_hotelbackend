const mongoose=require('mongoose');
 
//creating person schema
const personschema= new mongoose.Schema({
    name : {
        type : String,
        require: true
    },
    age : {
        type :Number
    },
    work : {
        type : String,
        enum : ['chef','waiter','manager'],
        require: true
    },
    mobile : {
        type : String,
        require : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    }
})

// creating model

const Person=mongoose.model('Person',personschema)
module.exports=Person