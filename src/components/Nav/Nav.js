import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <div>
           <div className="nav__wrapper">
               <div>
                   <p>Logo</p>
               </div>
              <div>
                  <p>Cart <i class="fas fa-cart-arrow-down"></i></p>
              </div>
           </div> 
           <div className="nav__sec">
               <ul>
                   <li>Home</li>
                   <li>Order</li>
                   <li>Contact</li>
                   <li>SignIn</li>
               </ul>
           </div>
        </div>
    )
}

export default Nav
