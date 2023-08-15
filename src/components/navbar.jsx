import React from 'react';
/* import { Link } from 'react-router-dom'; */
import Navbardata from './Navbardata';

import "../style.css";

const Navbar = () => {
  return (
    <div className='sidebar'>
    <ul className='sidebarlist'>{Navbardata.map((item)=>{
      return (
        <li key={item.id} className='row'>
          <div  id='icon'>{item.icon}</div> 
          <div  id="title" onClick={()=>{window.location.pathname = item.link}}>{item.title}</div>
        </li>
      );
    })}</ul>
    </div>
   );
}

export default Navbar
