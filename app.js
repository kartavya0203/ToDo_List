const expr=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require('cors')
const taskroutes=require("./routes/route")

const app=expr()

//MiddleWare Setup
app.use(cors())
app.use(bodyParser.json())
app.use("/api/tasks",taskroutes)

const PORT=4000

mongoose.connect("mongodb://localhost:27017/todolist")
.then(()=>{console.log("DATABASE CONNECTED ")
    app.listen(PORT,()=>console.log("SERVER IS RUNNING ON PORT 4000"))
})
.catch((error)=>console.log("Database Connection Failed",error))