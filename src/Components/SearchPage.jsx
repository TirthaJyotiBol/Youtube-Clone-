import React from 'react'
import '../css/SearchPage.css'

import TuneIcon from '@mui/icons-material/Tune';
import SearchProfile from './SearchProfile';
import SearchPageVideos from './SearchPageVideos';


function SearchPage() {
  return (
    <div className='searchPage' >
        <div className="filter__section">
            <TuneIcon className='filter_icon' />
            <h3 className='filter_heading' >FILTERS</h3>
        </div>

        <hr className='horizantalLine' />
      
      <div className="profile">
        <SearchProfile
            Avtar = 'https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo'
            channelName = 'Clever Programmer'
            subscribers = '2.5M'
            Videos= '680'
            ChannelDescription= 'You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level.'
          />
      </div>

      <hr id='horizantalLine__belowProfile' className='horizantalLine' />
  
      <SearchPageVideos
          image={'https://i.ytimg.com/vi/Mu1I89BeKxM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkqhG_PKRaJVfaogjadgec6ed7VA'}
          videoTitle = 'Python Tutorial for begineers'
          views= '275K'
          uploadTime = '9 months'
          channelName = 'clever programmer'
          description = 'in this tutorial we are gonna learn python'
          channelProfileImage={'https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj'}
      />

      <SearchPageVideos
          image={'https://i.ytimg.com/an_webp/rIHWZijUso8/mqdefault_6s.webp?du=3000&sqp=CITEu5MG&rs=AOn4CLBC6QjAqHc0F4Ypc4ytRJj565xj4w'}
          videoTitle = 'How to become a Blockchain Developer in 2022'
          views= '2K'
          uploadTime = '3 months'
          channelName = 'clever programmer'
          description = 'in this tutorial we are gonna see how to be an blockchain developer'
          channelProfileImage={'https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj'}
      />
      <SearchPageVideos
          image={'https://i.ytimg.com/vi/XtMThy8QKqU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCI2d1IF5Sf3lU40MmoKNGHxHk09g'}
          videoTitle = 'How to Build Netflix Clone Using React JS'
          views= '455K'
          uploadTime = '1 year'
          channelName = 'clever programmer'
          description = 'In this tutorial we are gonna make Netflix like website'
          channelProfileImage={'https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj'}
      />
        
 
      
    </div>
  )
}

export default SearchPage
