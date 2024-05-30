const mongoose=require('mongoose');
 
//creating person schema
const menuschema= new mongoose.Schema({
    name : {
        type : String,
        require: true
    },
    price : {
        type :Number,
        require:true
    },
    taste : {
        type : String,
        enum : ['sweet','sour','spicy'],
        require: true
    },
    is_drink : {
        type : Boolean,
        default:false,
    },
    ingredients : {
        type : [String],
       default:[]
    },
    num_sales : {
        type : Number,
       default:0
    }
})

// creating model

const menu=mongoose.model('menu',menuschema)
module.exports=menu