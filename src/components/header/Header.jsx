import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSM">Blockchain</span>
        <span className="headerTitleLG">Ethereum</span>
      </div>
      <div >
        <img className="headerImg" src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" />
      </div>
    </div>
  );
};

export default Header;
