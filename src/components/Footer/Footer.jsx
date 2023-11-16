import React from "react";
import "./Footer.scss";
import {
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
  FaDotCircle,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            During one of their many explorations, our founders Abhay Donga
            discovered that the dopest people of our land were in search of
            affordable, durable and ultra fashionable audio products to groove
            to. Thus, in 2014, they kickstarted a great voyage in Indian
            consumer waters.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              D2 - 201, Opera Palm, Pasodara Patiya, Surat, Gujarat - 394185
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91 7818070999</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: abhaydonga007@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">True Wireless Earbuds</span>
          <span className="text">Wired Headphones</span>
          <span className="text">Home Audio</span>
          <span className="text">Smart Watches</span>
          <span className="text">Wireless Headphones</span>
          <span className="text">Wireless Speakers</span>
          <span className="text">Mobile Accessories</span>
          <span className="text">TRebel</span>
        </div>
        <div className="col">
          <div className="title">Help</div>
          <span className="text">Track Your Order</span>
          <span className="text">Warranty & Support</span>
          <span className="text">Return Policy</span>
          <span className="text">Bulk Orders</span>
          <span className="text">FAQs</span>
          <span className="text">Why Buy Direct</span>
        </div>
        <div className="col">
          <div className="title">Company</div>
          <span className="text">About Us</span>
          <span className="text">News</span>
          <span className="text">Read Our Blog</span>
          <span className="text">Careers</span>
          <span className="text">Security</span>
          <span className="text">Investor Relations</span>
          <span className="text">Social Responsibility</span>
          <span className="text">Warranty Policy</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-1">
          <div className="title">
            Privacy Policy <FaDotCircle size={8} /> Terms & Conditions
          </div>
          <p className="text">
            © 2023 Imagine Marketing Limited. All Rights Reserved.
          </p>
          <p className="text">
            For queries contact us: Manager, Imagine Marketing Limited. Unit no.
            204 & 205, 2nd floor, D-wing & E-wing,
          </p>
          <p className="text">
            Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai,
            Maharashtra-400093, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
