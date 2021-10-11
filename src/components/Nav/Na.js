import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Na() {
    return (
        <div className="headers">
            <div className="dropdown">
                <button className="btn-nav">Bags</button>
                <div className="dropdown__menu information__grid">
                <div>
                  <div class="dropdown-heading">Ladies Bags</div>
                  <div class="dropdown-links">
                      <a href="/hello" class="link">All</a>
                      <a href="/good" class="link">Latest</a>
                      <a href="/heyy" class="link">Popular</a>
                  </div>
              </div>
              <div>
                  <div class="dropdown-heading">School Bags</div>
                  <div class="dropdown-links">
                      <a href="/kf" class="link">All</a>
                      <a href="#" class="link">Latest</a>
                      <a href="#" class="link">Popular</a>
                  </div>
              </div>
              <div>
                  <div class="dropdown-heading">Designer Bags</div>
                  <div class="dropdown-links">
                      <a href="#" class="link">All</a>
                      <a href="#" class="link">Latest</a>
                      <a href="#" class="link">Popular</a>
                  </div>
              </div>

                </div>
            </div>
            <div className="dropdown">
                <button className="btn-nav">Shoes</button>
                <div className="dropdown__menu information__grid">
                <div>
                  <div class="dropdown-heading">Ladies Shoes</div>
                  <div class="dropdown-links">
                      <a href="/hello" class="link">All</a>
                      <a href="/good" class="link">Latest</a>
                      <a href="/heyy" class="link">Popular</a>
                  </div>
              </div>
              <div>
                  <div class="dropdown-heading">Men Shoes</div>
                  <div class="dropdown-links">
                      <a href="/kf" class="link">All</a>
                      <a href="#" class="link">Latest</a>
                      <a href="#" class="link">Popular</a>
                  </div>
              </div>
              <div>
                  <div class="dropdown-heading">Children Shoes</div>
                  <div class="dropdown-links">
                      <a href="#" class="link">All</a>
                      <a href="#" class="link">Latest</a>
                      <a href="#" class="link">Popular</a>
                  </div>
              </div>

                </div>
            </div>
            <div className="dropdown">
                <button className="btn-nav">Children Bags</button>
                
            </div>
            <div className="dropdown">
                <button className="btn-nav"> <Link to = "/Register"> Login</Link> </button>
                
            </div>
        </div>
    )
}

export default Na
