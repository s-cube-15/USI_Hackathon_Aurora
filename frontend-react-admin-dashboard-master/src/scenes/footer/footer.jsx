import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling
import { IconButton } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column" style={{ flex: 2 }}>
          <h4>Aurora Rewards</h4>
          <p>
            Aurora Rewards is a comprehensive loyalty program designed to
            enhance customer engagement and retention through a variety of
            reward-based incentives.
          </p>
        </div>
        <div className="footer-column">
          <h4>USE CASES</h4>
          <ul>
            <li>Customer Retention</li>
            <li>Customer Loyalty</li>
            <li>Reward Points</li>
            <li>Targeted Promotion</li>
            
          </ul>
        </div>
        <div className="footer-column">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>Account</li>
            <li>Dashboard</li>
            <li>Help</li>
          </ul>
          <div className="footer-social">
            <IconButton>
              <FacebookOutlinedIcon />
              <InstagramIcon></InstagramIcon>
              <XIcon></XIcon>
            </IconButton>
          </div>
        </div>
        <div className="footer-column">
          <h4>CONTACT</h4>
          <ul>
            <li>Aurora Rewards</li>
            <li>Aurora@deloitte.com</li>
            <li>+91 9869079594</li>
            <li>+ 01 234 567 89</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Aurora Rewards 2025 Copyright</p>
      </div>
    </footer>
  );
};

export default Footer;
