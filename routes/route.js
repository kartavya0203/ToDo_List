const express=require('express')

const{
    createTask,
    fetchAllTasks,
    modifyTask,
    completeTask,
    removeTask,
}=require('../controller/taskcontroller')

const router=express.Router()

//Api Endpoints for Task Management

router.post("/createTask",createTask)
router.get("/list-tasks",fetchAllTasks)
router.put('/edit-task/:id',modifyTask)
router.patch('/mark-done/:id',completeTask)
router.delete('/delete-task/:id',removeTask)

module.exports=router
