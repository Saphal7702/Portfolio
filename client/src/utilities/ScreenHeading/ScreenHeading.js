import React from "react";
import "./ScreenHeading.css";

export default function ScreenHeading(props) {
  return (
    <div className="heading-container">
      <div className={"screen-heading-" + props.color}>
        <span>{props.title}</span>
      </div>

      {props.subHeading ? (
        <div className={"screen-sub-heading-" + props.color}>
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className="heading-seperator">
        <div className={"seperator-line-" + props.color}></div>
        <div className="seperator-blob">
          <div></div>
        </div>
      </div>
    </div>
  );
}
