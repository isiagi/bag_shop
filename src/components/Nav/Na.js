import React from 'react'
import './Nav.css'

function Na() {
    return (
        <div className="headers">
            <div className="dropdown">
                <button className="btn-nav">All Categories</button>
                <div className="dropdown__menu information__grid">
                <div>
                  <div class="dropdown-heading">Free Tutorials</div>
                  <div class="dropdown-links">
                      <a href="/hello" class="link">All</a>
                      <a href="/good" class="link">Latest</a>
                      <a href="/heyy" class="link">Popular</a>
                  </div>
              </div>
              <div>
                  <div class="dropdown-heading">Courses</div>
                  <div class="dropdown-links">
                      <a href="/kf" class="link">All</a>
                      <a href="#" class="link">Latest</a>
                      <a href="#" class="link">Popular</a>
                  </div>
              </div>
              <div>
                  <div class="dropdown-heading">Courses</div>
                  <div class="dropdown-links">
                      <a href="#" class="link">All</a>
                      <a href="#" class="link">Latest</a>
                      <a href="#" class="link">Popular</a>
                  </div>
              </div>

                </div>
            </div>
            <div className="dropdown">
                <button className="btn-nav">Ladies Bags</button>
                <div className="dropdown__menu information__grid">
                <div>
                  <div class="dropdown-heading">Free Tutorials</div>
                  <div class="dropdown-links">
                      <a href="/hello" class="link">All</a>
                      <a href="/good" class="link">Latest</a>
                      <a href="/heyy" class="link">Popular</a>
                  </div>
              </div>
              <div>
                  <div class="dropdown-heading">Courses</div>
                  <div class="dropdown-links">
                      <a href="/kf" class="link">All</a>
                      <a href="#" class="link">Latest</a>
                      <a href="#" class="link">Popular</a>
                  </div>
              </div>
              <div>
                  <div class="dropdown-heading">Courses</div>
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
                <button className="btn-nav">Login</button>
                
            </div>
        </div>
    )
}

export default Na
