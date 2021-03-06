import React, {useContext} from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import { AppContext } from '../Context/Context';

function Nav() {
    const {cartItems} = useContext(AppContext);
    // alert(cartItems.length)

    return (
        <div>
           <div className="nav__wrapper">
               <div>
                   <Link to = "/">Smart Ways</Link>
               </div>
              <div>
                  <Link to = "/Mycart">Cart {cartItems && cartItems.length}<i class="fas fa-cart-arrow-down"></i></Link>
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
