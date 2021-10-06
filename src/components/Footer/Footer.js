import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./Footerstyle";

const Footer = () => {
  return (
    <Box>
      <Container>
        <h1 style={{ color: "green", textAlign: "center", marginTop: "-50px" }}>
          LUXURY BAGS UGANDA
        </h1>

        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Kampala</FooterLink>
            <FooterLink href="#">Jinja</FooterLink>
            <FooterLink href="#">Wakiso</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

// function Last() {
//   return (
//       <div>
//       <footer className="last">
//       <div className="footer__links">
//       <p>
//       <i class="fab fa-twitter"></i>
//       </p>
//       <p>
//       <i class="fab fa-facebook-square"></i>
//       </p>
//       <p>
//       <i class="fab fa-whatsapp"></i>
//       </p>
//       </div>
//       <p>Bags @ 2021</p>
//     </footer>
//     </div>
//   );
// }

// export default Last;
