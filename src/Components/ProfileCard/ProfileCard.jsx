import React from 'react'
import './ProfileCard.css';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';

function ProfileCard() {
    const profilePage = true;
  return (
      <div className="profileCard">
          <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
          </div>

          <div className="ProfileName">
              <span>Zendaya MJ</span>
              <span>Senior UI/UX Designer</span>
          </div>

          <div className="followStatus">
              <hr />

              <div>
                  
                  <div className="follow">
                      <span>6,980</span>
                      <span>Followings</span>
                  </div>

                  <div className="vl"></div>

                  <div className="follow">
                      <span>1</span>
                      <span>Followers</span>
                  </div>

                  {profilePage && (
                      <>
                          <div className="vl"></div>
                          <div className="follow">
                              <span>3</span>
                              <span>Posts</span>
                          </div>
                      </>
                  )}

              </div>

              <hr />

          </div>

          {profilePage ? '' : <span>
              My Profile
          </span>}

          

    </div>
  )
}

export default ProfileCard