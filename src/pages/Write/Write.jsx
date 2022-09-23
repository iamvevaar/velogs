import "./Write.css"
import React from 'react'
import {BsPlusSquareFill} from "react-icons/bs"

const Write = () => {
  return (
    <div className="write" >
        <img src="https://images.unsplash.com/photo-1644190018970-53ab9d652f79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="" className="writeFormImg" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="">
                <BsPlusSquareFill className="writeFormIcon"/>
                </label>
                <input type="file" id="writeFormfile" style={{display:"none"}} />
                <input type="text" placeholder="Title" autoFocus={true} className="writeFormInput"/>
            </div>

            <div className="writeFormGroup">
                <textarea  type="text" className="writeFormInput writeFormText" placeholder="Write Your Blog"></textarea>
            </div>

            <button className="writeFormSubmit">PUBLISH</button>

        </form>
    </div>
  )
}

export default Write