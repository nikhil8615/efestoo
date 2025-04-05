import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-box">
          <p className="footer-box-text">
            Looking for your kind of people?
            <br />
            searching for the perfect fest?
            <br />
            Efestoo has you covered—find your fest, find your tribe
          </p>
        </div>

        <div className="footer-links">
          <h4>About</h4>
          <p>Terms and conditions</p>
          <p>Privacy policy</p>
          <p>Contact</p>
        </div>

        <div className="footer-socials">
          <h4>Social</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Instagram</p>
        </div>

        <div className="footer-contact">
          <h4>Address</h4>
          <p>NIT, Sector 1, Rourkela, Odisha</p>
          <p>Contact: +91-9572599261</p>
          <p>Email: efestoo.in@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <h2 className="footer-logo">Efestoo.com</h2>
        <div className="footer-trust">
          <p>
            32k<span>+</span>
            <br />
            Brands trust us
          </p>
          <p>
            32k<span>+</span>
            <br />
            Brands trust us
          </p>
          <p>
            32k<span>+</span>
            <br />
            Brands trust us
          </p>
          <p>
            32k<span>+</span>
            <br />
            Brands trust us
          </p>
        </div>
      </div>

      <p className="footer-copy">© 2025 Efestoo.in All rights reserved.</p>
    </footer>
  );
};

export default Footer;
