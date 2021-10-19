import React from "react";
import "./Last.css";

function Last() {
  return (
    <div className="container__last">
      <div className="last__container">
        <div style={{textAlign: "center"}}>
          <i class="fas fa-map-marked-alt"></i>
          <h5 className="he">Get In Touch</h5>
          <p>Old Kampala, Kampala Uganda</p>
          <p>
            <a href="#">smartways@gmail.com</a>
          </p>
          <p>+256 777 963 365</p>
        </div>
        <footer className="last">
          <i class="fas fa-comment-alt-dots"></i>
          <h5 className="he">Social Media</h5>
          <div className="footer__links">
            <p>
              <i class="fab fa-twitter"></i>
            </p>
            <p>
              <i class="fab fa-facebook-square"></i>
            </p>
            <p>
              <i class="fab fa-whatsapp"></i>
            </p>
          </div>
        </footer>
        <div style={{textAlign: "center"}}>
          <i class="fas fa-link"></i>
          <h5 className="he">Useful Links</h5>
          <p>Our Cookie Policy</p>
          <p>Careers</p>
          <p>Term and Condition</p>
        </div>
      </div>
      <p>smartways @ 2021</p>
    </div>
  );
}

export default Last;
