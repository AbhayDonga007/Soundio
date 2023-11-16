import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaStar,
} from "react-icons/fa";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
          <InputText className="in" placeholder="Email Address" />
          <Button className="btn" label="Submit" />
        </div>
        <span className="text">
          Will be used in accordance with our Privacy Policy
        </span>
        <span className="social-icons">
          <div className="icon">
            <FaFacebookF size={20} />
          </div>
          <div className="icon">
            <FaTwitter size={20} />
          </div>
          <div className="icon">
            <FaLinkedinIn size={20} />
          </div>
          <div className="icon">
            <FaYoutube size={20} />
          </div>
          <div className="icon">
            <FaInstagram size={20} />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
