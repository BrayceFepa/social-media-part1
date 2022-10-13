import React from 'react';
import './Post.css';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';

const Post = (post) => {
    const { img, name, desc, likes, liked } = post;
  return (
      <div className="Post">
          <img src={img} alt="" />

          <div className="postReact">
              <img src={liked ? Heart : NotLike} alt="" />
              <img src={Comment} alt="" />
              <img src={Share} alt="" />
          </div>

          <span style={{ color: "var(--gray)", fontSize: "12px" }} >{likes} Likes </span>

          <div className="detail">
              <span><b>{name}</b></span>
              <span> {desc}</span>
          </div>

    </div>
  )
}

export default Post