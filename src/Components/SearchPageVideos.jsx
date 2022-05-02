import { Avatar } from '@mui/material'
import React from 'react'
import '../css/searchPageVideos.css'

function SearchPageVideos({image,videoTitle,views,uploadTime,channelName,description,channelProfileImage}) {
  return (
    <div className='searchPageVideos' >

        <div className="Image__thumbnail">
            <img className='thumbnail__channel' src={image} alt={channelName} />
        </div>

        <div className="elements_video">
            <h3 className='videoTitle' > {videoTitle} </h3>
            <p className='viewsAndTime' > {views} views • {uploadTime} ago</p>

            <div className="profile__flex">
               <Avatar src= {channelProfileImage} className='channelProfileImage' />
               <p className="channelProfileName"> {channelName} </p>
            </div>
            <p className="description"> {description} </p>
        </div>

    </div>
  )
}

export default SearchPageVideos
