import React from "react";
import "./Sidebar.css";
import DP from "../../assets/Passport.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>

        <div className="sidebarItemTop">
          <img className="sidebarImg" src={DP} alt="" />
          <span className="sidebarTitleAuthor">GAUTAM SUTHAR</span>
        </div>

        <div className="sidebarItemBottom">
          <p className="sidebarPara">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            porro facilis, odio fugiat perferendis consequuntur quas cum
            deserunt ad eos vitae, tempora iusto iure, labore adipisci illum
            sequi veritatis debitis!
          </p>
        </div>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Sports</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocials">
          <FaFacebookSquare className="sidebarIcons" />
          <FaTwitterSquare className="sidebarIcons" />
          <FaPinterestSquare className="sidebarIcons" />
          <FaInstagramSquare className="sidebarIcons" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
