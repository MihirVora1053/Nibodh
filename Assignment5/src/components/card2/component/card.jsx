import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function card(props) {
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={props.src} alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.desc}
          </p>
          <ProgressBar completed={props.val} bgColor="#f5f5f5" baseBgColor="#e56700" labelColor="#000" />

        </div>
      </div>
    </div>
  );
}
