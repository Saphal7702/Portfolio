import React from "react";
import "./Footer.css";
import mainlogo from "../../../assets/Home/shape-bg.png";

export default function footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={mainlogo}
          alt="you have problem with the image"
        />
      </div>
    </div>
  );
}