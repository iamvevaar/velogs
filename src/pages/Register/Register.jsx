import "./Register.css"
import React from 'react'

const Register = () => {
  return (
    <div className="register">
    <span className="registerTitle">REGISTER</span>
      <form className="registerForm">
          <label htmlFor="">Username</label>
          <input type="name" className="registerInput" placeholder="Your UserName"/>
          <label htmlFor="">Email</label>
          <input type="email" className="registerInput" placeholder="Your Email Address"/>
          <label htmlFor="">Password</label>
          <input type="password" className="registerInput" placeholder="Your Password" />
          <button className="registerButton">Register</button>
      </form>
  </div>
    )
}

export default Register