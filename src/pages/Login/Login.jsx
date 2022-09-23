import "./Login.css"
import React from 'react'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">LOGIN</span>
        <form className="loginForm">
            <label htmlFor="">Email</label>
            <input type="email" className="loginInput" placeholder="Your Email Address"/>
            <label htmlFor="">Password</label>
            <input type="password" className="loginInput" placeholder="Your Password" />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}

export default Login