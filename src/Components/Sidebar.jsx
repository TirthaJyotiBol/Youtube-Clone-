import React from 'react'
import '../css/sidebar.css';
import SideBarRow from './SideBarRow';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SwitchVideoOutlinedIcon from '@mui/icons-material/SwitchVideoOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';


function Sidebar() {
  return (
    <div className='sidebar__component' >
      <SideBarRow selected title='Home' Icon={HomeOutlinedIcon} />
      <SideBarRow title='Explore' Icon={ExploreOutlinedIcon} />
      <SideBarRow title='Shots' Icon={SwitchVideoOutlinedIcon}  />
      <SideBarRow title='Subscriptions' Icon={SubscriptionsOutlinedIcon} />
      <hr id="sidebar_row_afterElementSection___line"/>

      <SideBarRow title= 'Library' Icon={VideoLibraryIcon}/>
      <SideBarRow title= 'History' Icon={HistoryIcon}/>
      <SideBarRow title= 'Your Videos' Icon={OndemandVideoIcon}/>
      <SideBarRow title= 'Your Movies' Icon={LocalMoviesIcon}/>
      <SideBarRow title= 'Watch Later' Icon={WatchLaterIcon}/>
      <SideBarRow title= 'Liked Videos' Icon={ThumbUpOutlinedIcon}/>
      <a id="anchors" href='/showMore'> <SideBarRow title= 'Show More' Icon={ArrowDropDownOutlinedIcon}/></a> 
      <hr id="sidebar_row_afterElementSection___line"/>

    </div>
  )
}

export default Sidebar;
