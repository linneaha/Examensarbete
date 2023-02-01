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
        <div className="progressBar">
          <CircularProgressbar
            text="Well done!"
            styles={buildStyles({
              textColor: "#000",
              textSize: "12px",
              pathColor: "rgba(26, 156, 34)",
            })}
          />
        </div>
        <section className="saveData">
          <div className="activeTime">
            <p>Total active time</p>
            <p>{convertToMinutes(newStats.totalActiveTime)}m</p>
          </div>
          <div className="dataFlexBox">
            <div>
              <p className="number">
                {convertToMinutes(newStats.amountOfBreaks)}
              </p>
              <p className="label">Breaks</p>
            </div>
            <div>
              <p className="number">{convertToMinutes(newStats.totalTime)}m</p>
              <p className="label">Total</p>
            </div>
            <div>
              <p className="number">
                {convertToMinutes(newStats.totalBreakTime)}m
              </p>
              <p className="label">Break time</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompleteActivity;
