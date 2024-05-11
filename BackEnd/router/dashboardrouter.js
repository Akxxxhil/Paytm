const express=require("express")
const {authMiddleware}=require("../middleware/middleware")
const Router=express.Router()


const {signup,login,update} =require("../controler/auth")

//Router.post("/login",login)signin
Router.post("/signup",signup)
Router.post("/login",login)
Router.put("/update",authMiddleware,update)


module.exports=Router