import React from 'react'
import '../css/sidebar.css';

function SideBarRow({selected,title,Icon}) {
  return (
    <div className={`sidebarRow__component ${selected && "selected"} `} >
        <section className='sideBar_elements' >
                <div className="icons">  <Icon/> </div>
                <p className='title__sidebar' > {title} </p>
        </section>

    </div>
  )
}

export default SideBarRow;
