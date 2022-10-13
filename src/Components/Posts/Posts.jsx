import React from 'react';
import './Posts.css';
import { PostData } from '../../Data/PostsData';
import Post from '../Post/Post';

const Posts = () => {
  return (
      <div className="posts">
          {PostData.map((post, id) => (
              <Post {...post} key={id} />
          ))}
    </div>
  )
}

export default Posts