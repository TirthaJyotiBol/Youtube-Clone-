import React from 'react'
import '../css/videocard.css'
import { Avatar } from '@mui/material'

function VideoCard({thumbnailImage,VideoTitle,channelName,views,channelImage,uploadTime}) {
  return (
    <div className='videoCard__component' >

        <img className='thumbnailImage__videocard' src={thumbnailImage} alt={channelName} />

        <div className="cName_title_flex___videocard">
            <Avatar className='avtaar_channelImage' alt="User Avtar" src={channelImage}/>
            <p className='videoTitle__videocard' > {VideoTitle}</p>
        </div>

        <p className='channelName__videocard' >{channelName}</p>

        <div className="views_time_flex____videocard">
            <p className='views__videocard' >{views} Views •</p>
            <p channelName='uploadTime__videocard' >{uploadTime}</p>
        </div>
        
    </div>
  )
}

export default VideoCard;
