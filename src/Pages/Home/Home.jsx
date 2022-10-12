import React from 'react'
import PostSide from '../../Components/PostSide/PostSide';
import ProfileSide from '../../Components/ProfileSide/ProfileSide';
import './Home.css';

function Home() {
  return (
      <div className="home">
          <ProfileSide/>
          <PostSide/>
          <div className="rightSide">RightSide</div>
    </div>
  )
}

export default Home