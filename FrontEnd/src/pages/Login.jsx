import React from 'react'
import { NavLink } from 'react-router-dom'

function login() {
  return (
    <div style={{border:"1px solid black",textAlign:"center"}}>
      <div>Log In</div>
      <p>Enter Your Credentials to acess your Account</p> <br />

      <label htmlFor="">Email</label><br />
      <input type="text" /><br />
      <label htmlFor="">Password</label><br />
      <input type="text" /><br />

      <button>Log In</button>
      <div>Don't have an Account ?
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </div>
  )
}

export default login
