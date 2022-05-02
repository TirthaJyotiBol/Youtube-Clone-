import React from 'react'
import '../css/searchProfile.css'
import { Avatar, Button } from '@mui/material';

function SearchProfile({Avtar,channelName,subscribers,Videos,ChannelDescription}) {
  return (
    <div className='SearchProfile' >
        <div className="avtar">
            <Avatar className='avtaar__image___profile' alt="Profile Avtaar" src={Avtar} />
        </div>

        <div className="elements__profile">
            <h1 className='channelName' >{channelName}</h1>

            <p className='subscribers_videos'>  {subscribers} subscribers • {Videos} videos </p>

            <p className='channelDescription' >{ChannelDescription}</p>

        </div>

        <div className="subscribeButton">
            <button className='subscriptionButton'>SUBSCRIBE</button>
        </div>
      
    </div>
  )
}

export default SearchProfile;
