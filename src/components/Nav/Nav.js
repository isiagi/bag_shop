import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
           <div className="nav__wrapper">
               <div>
                   <Link to = "/">Logo</Link>
               </div>
              <div>
                  <Link to = "/Mycart">Cart <i class="fas fa-cart-arrow-down"></i></Link>
              </div>
           </div> 
           {/* <div className="nav__sec">
               <ul>
                   <li>Home</li>
                   <div>
                   <li>Order</li>
                   <div>
                       <div>Heyy</div>
                       <div>Hello</div>
                   </div>
                   </div>
                   <li>Contact</li>
                   <li>SignIn</li>
               </ul>
           </div> */}
        </div>
    )
}

export default Nav
