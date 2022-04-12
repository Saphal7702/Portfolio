import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

import education from "../../assets/AboutMe/education.svg";
import interests from "../../assets/AboutMe/interests.svg";
import programming from "../../assets/AboutMe/programming-skills.svg";
import work from "../../assets/AboutMe/work-history.svg";

const AboutMe = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const AboutmeHeading = (props) => {
    return (
      <div className="aboutme-heading">
        <div className="aboutme-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="aboutme-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="aboutme-sub-heading">
          <span>{props.Minor ? props.Minor : ""}</span>
        </div>
        <div className="aboutme-sub-heading">
          <span>{props.GPA ? props.GPA : ""}</span>
        </div>
        <div className="aboutme-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const aboutmeBullets = [
    { label: "Education", logoSrc: education },
    { label: "Work History", logoSrc: work },
    { label: "Programming Skills", logoSrc: programming },
    { label: "Interests", logoSrc: interests },
  ];

  const programmingSkillsDetails = [
    { skill: "Java", ratingPercentage: 90 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "C", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "React", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "AWS", ratingPercentage: 70 },
  ];

  const aboutmeDetails = [
    <div className="aboutme-screen-container" key="education">
      <AboutmeHeading
        heading={"The University of New Mexico"}
        subHeading={"BACHELOR OF COMPUTER SCIENCE"}
        Minor={"Minor: Mathematics"}
        GPA={"GPA: 3.5+"}
        fromDate={"2018"}
        toDate={"2022"}
      />
    </div>,

    <div className="aboutme-screen-container" key="work-experience">
      <div className="experience-container">
        <AboutmeHeading
          heading={"Teaching Assistant"}
          subHeading={"The University of New Mexico"}
          fromDate={"2022"}
          toDate={"Present"}
        />
        <AboutmeHeading
          heading={"Software Developer Intern"}
          subHeading={"Leapfrog Technology Inc."}
          fromDate={"2020"}
          toDate={"2021"}
        />
        <AboutmeHeading
          heading={"Research Scholar"}
          subHeading={"The University of New Mexico"}
          fromDate={"2019"}
          toDate={"2020"}
        />
        <AboutmeHeading
          heading={"Programmer Analyst"}
          subHeading={"The University of New Mexico"}
          fromDate={"2018"}
          toDate={"2019"}
        />
      </div>
    </div>,

    <div
      className="aboutme-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="aboutme-screen-container" key="interests">
      <AboutmeHeading
        heading="Soccer"
        description="I love to play and watch soccer. If you're Real Madrid fan, we can definitley get along."
      />
      <AboutmeHeading
        heading="Video Game"
        description="I like to challenge my reflexes a lot while competing in various games, pushing the rank and having interactive gaming sessions excites me the most."
      />
      <AboutmeHeading heading="Music" description="Music make things easier." />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return aboutmeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img className="bullet-logo" src={bullet.logoSrc} alt="B" />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getAboutmeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="aboutme-details-carousal"
      >
        {aboutmeDetails.map((aboutmeDetail) => aboutmeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="aboutme-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="aboutme-content">
        <ScreenHeading
          title={"About Me"}
          subHeading={"My Formal Bio"}
          color={"black"}
        />
        <div className="aboutme-card">
          <div className="aboutme-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="aboutme-bullet-details">{getAboutmeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
