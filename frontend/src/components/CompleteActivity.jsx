import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { GrFormClose } from "react-icons/gr";
import { IoMdCheckmark } from "react-icons/io";

const CompleteActivity = ({ toggleCompleteModal, newStats, activityName }) => {
  const convertToMinutes = (duration) => {
    var minutes = Math.floor(duration / 1000 / 60);
    return minutes;
  };

  return (
    <>
      <div
        className="completeModalBackdrop"
        onClick={toggleCompleteModal}
      ></div>
      <div className="completeModal">
        <GrFormClose onClick={toggleCompleteModal} className="exitBtn" />
        <div className="completeText">
          <h1>{activityName}</h1>
          <IoMdCheckmark />
        </div>
        <CircularProgressbar
          text="Well done!"
          styles={buildStyles({
            textColor: "#000",
            textSize: "12px",
            pathColor: "rgba(26, 156, 34)",
          })}
        />
        <p>Total active time: {convertToMinutes(newStats.totalActiveTime)}</p>
        <p>Amount of breaks: {convertToMinutes(newStats.amountOfBreaks)}</p>
        <p>
          Time before first break:{" "}
          {convertToMinutes(newStats.timeBeforeFirstBreak)}
        </p>
        <p>Total break time: {convertToMinutes(newStats.totalBreakTime)}</p>
      </div>
    </>
  );
};

export default CompleteActivity;
