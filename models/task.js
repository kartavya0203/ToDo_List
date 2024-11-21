const mongoose = require('mongoose')

const taskSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String},
    status:{type:Boolean,default:false},
    dueDate:{type:Date},
    category:{type:String}
})

module.exports=mongoose.model("Task",taskSchema)
