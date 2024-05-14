import React, { useState } from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom'

function Signup() {
  const [userName,setUsername]=useState("")
  const [firstName,setfirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [password,setpassword]=useState("")
  function usernamehandler(e){
setUsername(e.target.value)
  }
  function firstnamehandler(e){
    setfirstName(e.target.value)
  }
  function lastnamehandler(e){
    setLastName(e.target.value)
  }
  function passwordhandler(e){
    setpassword(e.target.value)
  }
  function signuphandler(){
    axios.post("http://localhost:3000/app/v1/user/signup",{
      userName,
      firstName,
      lastName,
      password
    })
  }
  return (
    <div style={{border:"1px solid black",textAlign:"center"}}>
      <div>Sign up</div>
      <p>Enter your Information to create an account</p><br />

      <label htmlFor="">First Name</label> <br />
      <input onChange={firstnamehandler}  type="text" /><br />
      <label htmlFor="">Last Name</label><br />
      <input onChange={lastnamehandler}  type="text" /><br />
      <label htmlFor="">Email</label><br />
      <input onChange={usernamehandler}  type="text" /><br />
      <label htmlFor="">Password</label><br />
      <input onChange={passwordhandler}  type="text" /><br />

      <br />
      <button onClick={signuphandler}>SignUp</button>
      <div>Already have an Account ?
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  )
}

export default Signup
