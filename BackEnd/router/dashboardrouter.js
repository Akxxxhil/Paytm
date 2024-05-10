const express=require("express")
const Router=express.Router()


const {signup,login} =require("../controler/auth")

//Router.post("/login",login)signin
Router.post("/signup",signup)
Router.post("/login",login)


module.exports=Router