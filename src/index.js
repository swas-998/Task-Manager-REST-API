const express=require("express")
require("./db/mongoose.js")
const userRouter=require("./routers/user")
const taskRouter=require("./routers/task")


const app=express()
const port=process.env.PORT

const multer=require('multer')
const upload=multer({
    dest:'images',
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){

        if(!file.originalname.match(/\.(doc|docx)$/))
        {
            return cb(new Error("please upload a word document"))
        }
        cb(undefined,true)

        // cb(new Error("file must be a PDF"))
        // cb(undefined,true)
        // cb(undefined,false)

    }

})

app.post('/upload',upload.single('upload'),(req,res)=>{
    res.send()
},(error,req,res,next)=>{
    res.status(400).send({error:error.message})
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log("Server is up on port "+port)
})


// const Task=require("./models/task")
// const User=require("./models/user")
// const main=async()=>{
// //     const task=await Task.findById('5ebbd755d0476909e0d49377')
// //     await task.populate('owner').execPopulate()
// //     console.log(task.owner)
//     const user =await User.findById('5ebbd5be0456274280dbdcbc')
//    await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }


// main()