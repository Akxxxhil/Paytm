const express=require("express")
const Router=express.Router()


const {signup} =require("../controler/auth")

//Router.post("/login",login)
Router.post("/signup",signup)


module.exports=Router