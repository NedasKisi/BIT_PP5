import React from "react";
import "./Footer.css"

const dateFooter = (new Date().getFullYear())

const Footer = () => (
    
    <div className="footer-wrap">
      <p>{dateFooter} &copy; PP5 - Learning Project @ BIT</p> 
    </div>
  );


export default Footer;