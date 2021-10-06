import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom'



function Navbar() {
    return (
        <div>
           <div className="nav__wrapper">
               <div>
                   <Link to = "/"><span>SMART WAYS</span></Link>
               </div>
           </div> 
          
        </div>
    )
}

export default Navbar
