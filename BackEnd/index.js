const express=require("express")
const cors = require("cors");

const app=express()
require("dotenv").config()


app.use(cors());
app.use(express.json())
const PORT=process.env.PORT||5000

const Router=require("./router/dashboardrouter")
app.use("/app/v1",Router)

const database=require("./config/db")
database()


app.listen(PORT,()=>{
    console.log("Serever is listening");
})

app.get("/",(req,res)=>{
    res.send("Everything is ok my buddy")
})