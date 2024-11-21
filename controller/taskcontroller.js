const Task=require("../models/task")

//creating a task

exports.createTask=async (req,res)=>{
    const{ title,description,dueDate,category}=req.body 

    if(!title || title.trim()==""){
        return res.status(400).json({message:"Task Title Required"})
    }

    try {
        const newTask=new Task({title,description,dueDate,category})
        await newTask.save()
        res.status(201).json(newTask)
    } catch (error) {
        res.status(500).json({message:"Error Creating the Task"})
    }

    }

//Retreving The Tasks

exports.fetchAllTasks=async(req,res)=>{
    try {
        const tasks=await Task.find()
        res.status(200).json(tasks)

    } catch (error) {
        res.status(500).json({message:"Error Fetching the Tasks"})
    }
}

//update task information 

exports.modifyTask=async (req,res)=>{
    const{id}=req.paramas
    const {title,description,dueDate,category}=req.body

    if(title && title.trim()==""){
        return res.status(400).json({message:"Task Title cannot be empty "})
    }
     
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            {title,description,dueDate,category},
            {new:true}

        )

        if(!updatedTask){
            return res.status(404).json({message:"The Task is not Updated"})
        }

        return res.status(200).json({message:"Task Updated Successfully"})
    } catch (error) {
        res.status(500).json({message:"Error Updating the task"})
    }
  
}

//Mark Task as Comleted

exports.completeTask=async(req,res)=>{
    const{id}=req.paramas

    try {
        const task=await Task.findById(id);
        if(!task){return res.send(404).json({message:"Task Does not Exist"})}

        if(task.status){
            return res.status(400).json({message:"Task Already Completed"})
        }

        task.status=true
        await task.save()
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({message:"Error Marking the Task"})
        
    }
}

//Delete task 

exports.removeTask=async(req,res)=>{
    const {id}=req.paramas

    try {
        const deletedtask = await Task.findByIdAndDelete(id)
        if(!deletedtask){
            return res.status(404).json({message:"Task not Found"})
        }
        res.status(200).json({message:"Task Deleted Successfully"})
    } catch (error) {
        res.status(500).json({message:"Error Finding The Task"})
    }
}