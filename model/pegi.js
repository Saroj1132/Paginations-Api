const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pegiSchema = mongoose.Schema({
    
    name:{
        type:String,
        require:true
    },
    age:{
        type:String,
    },
    city:{
        type:String,
        require:true
    }    
});

var pegi=mongoose.model("pegi", pegiSchema)

module.exports=pegi