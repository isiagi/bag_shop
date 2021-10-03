import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <div class="nav__container">
           <div className="nav__wrapper">
               <div>
                   <p>Logo</p>
               </div>
              <div>
                  <p>Cart <i class="fas fa-cart-arrow-down"></i></p>
              </div>
           </div>     
        </div>
    )
}

export default Nav
