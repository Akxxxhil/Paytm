const express=require("express")
const {authMiddleware}=require("../middleware/middleware")
const Router=express.Router()


const {signup,login,update} =require("../controler/auth")
const {userBalance}=require("../controler/account")

//Router.post("/login",login)signin
Router.post("/user/signup",signup)
Router.post("/user/login",login)
Router.put("/user/update",authMiddleware,update)


Router.get("/userBalance",authMiddleware,userBalance);


module.exports=Router