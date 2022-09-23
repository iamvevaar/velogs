import "./Post.css";
import React from "react";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1634704760994-96e3ccf2ae85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postNiches">
          <span className="postNiche">Tech </span>
          <span className="postNiche">Blockchain</span>
          <span className="postDate">1 hour ago</span>
        </div>
        <span className="postTitle">Sharding Architecture Introduction</span>
        <hr />
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo non quo eveniet fugiat soluta commodi porro corrupti, voluptatum dignissimos omnis doloribus sint odio ut asperiores dolorem assumenda. Doloribus, labore aliquid.lore
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, autem nobis! Rem officiis fuga quasi nostrum, illum eos quia. Mollitia quidem adipisci nulla dolores, omnis deleniti iste inventore aliquam nostrum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ducimus natus consequuntur minima fuga? Et animi sequi adipisci nulla enim! Facilis minima nesciunt placeat maxime est laboriosam facere nostrum id.
      </p>
    </div>
  );
};

export default Post;
