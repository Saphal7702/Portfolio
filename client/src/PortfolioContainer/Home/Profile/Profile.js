import React from "react";
import Typical from "react-typical";
// import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="www.linkedin.com/in/saphal-karki-2a4114203">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="https://github.com/Saphal7702">
                <i className="fa fa-github" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://www.facebook.com/Saphal7702/">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>

            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Saphal</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Computer Science Graduate 👨‍💻",
                    1000,
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            {/* <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button> */}
            <a href="saphal.pdf" download="Resume_Saphal.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
