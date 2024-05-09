const mongoose=require("mongoose")
require("dotenv").config()
const databse=()=>{
    mongoose.connect(process.env.DATABASE_URI)
    .then(()=>{
        console.log("Databse Connected Successfully");
    })
    .catch(()=>{
        console.log("Databse not not not Connected Successfully");
    })
}
module.exports=databse
