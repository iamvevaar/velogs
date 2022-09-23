import "./SinglePost.css";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.unsplash.com/photo-1643000296927-f4f1c8722b7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor sit amet
          <div className="singlePostOps">
            <FaEdit className="singlePostIcon" />
            <AiFillDelete className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Gautam</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est
          incidunt accusantium aut quia a error, assumenda veniam sint eligendi
          maxime, deserunt, similique quidem. Porro dolorum reiciendis odit esse
          perspiciatis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores libero velit eum. Temporibus cumque at magni, consectetur dignissimos nostrum, maxime recusandae quis voluptate, vitae modi. Non ea qui veritatis fuga!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum illum minima consequuntur assumenda et cum quo facere similique, nesciunt veritatis quasi dolor excepturi velit incidunt placeat non nihil temporibus sit!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum illum minima consequuntur assumenda et cum quo facere similique, nesciunt veritatis quasi dolor excepturi velit incidunt placeat non nihil temporibus sit!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum illum minima consequuntur assumenda et cum quo facere similique, nesciunt veritatis quasi dolor excepturi velit incidunt placeat non nihil temporibus sit!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum illum minima consequuntur assumenda et cum quo facere similique, nesciunt veritatis quasi dolor excepturi velit incidunt placeat non nihil temporibus sit!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum illum minima consequuntur assumenda et cum quo facere similique, nesciunt veritatis quasi dolor excepturi velit incidunt placeat non nihil temporibus sit!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum illum minima consequuntur assumenda et cum quo facere similique, nesciunt veritatis quasi dolor excepturi velit incidunt placeat non nihil temporibus sit!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum illum minima consequuntur assumenda et cum quo facere similique, nesciunt veritatis quasi dolor excepturi velit incidunt placeat non nihil temporibus sit!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum illum minima consequuntur assumenda et cum quo facere similique, nesciunt veritatis quasi dolor excepturi velit incidunt placeat non nihil temporibus sit!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
