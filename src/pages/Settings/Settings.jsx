import "./Settings.css";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { FaUser } from "react-icons/fa";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>

        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" />
            <label htmlFor="fileInput">
              <FaUser className="settingsPPIcon" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>UserName</label>
          <input type="text" placeholder="Gautam" />
          <label>Email</label>
          <input type="email" placeholder="gautam@gmail.com" />
          <label>Password</label>
          <input type="password" name="" id="" />
          <button className="settingsUpdate">UPDATE </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
