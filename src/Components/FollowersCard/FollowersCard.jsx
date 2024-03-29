import React from 'react'
import './FollowersCard.css';
import { Followers } from '../../Data/FollowersData';

function FollowersCard() {
  return (
      <div className="followerscard">
          <h3>Who is following you</h3>

          {Followers.map((follower, id) => (
              <div className='folllower'>
                  <div>
                      <img src={follower.img} className='followerImg' alt="" />
                      <div className="name">
                          <span>{follower.name}</span>
                          <span>@{follower.username}</span>
                      </div>
                  </div>
                  <button className='button fc-button'>Follow</button>
              </div>
          ))}

    </div>
  )
}

export default FollowersCard