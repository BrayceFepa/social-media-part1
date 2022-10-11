import React from 'react'
import ProfileSide from '../../Components/ProfileSide/ProfileSide';
import './Home.css';

function Home() {
  return (
      <div className="home">
          <ProfileSide/>
          <div className="postSide">Posts</div>
          <div className="rightSide">RightSide</div>
    </div>
  )
}

export default Home