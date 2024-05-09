const express=require("express")
const Router=express.Router()


const {login,signup} =require("../controler/auth")

Router.post("/login",login)
Router.post("/signup",signup)


module.exports=Router