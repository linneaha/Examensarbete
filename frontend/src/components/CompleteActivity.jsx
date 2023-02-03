import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "react-circular-progressbar/dist/styles.css";
import { GrFormClose } from "react-icons/gr";
import { IoMdCheckmark } from "react-icons/io";

const CompleteActivity = ({ toggleCompleteModal, newStats, activityName, toggleModal }) => {
  const convertToMinutes = (duration) => {
    var minutes = Math.floor(duration / 1000 / 60);
    return minutes;
  };

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 3);
  }, [percentage]);

  console.log(toggleModal)

  return (
    <>
      <div className={`completeModalBackdrop ${!toggleModal ? "close" : "open"}`} onClick={toggleCompleteModal}>
        <div className="completeModal">
          <GrFormClose onClick={toggleCompleteModal} className="exitBtn" />
          <div className="completeText">
            <h1>{activityName}</h1>
            <IoMdCheckmark />
          </div>
          <div className="progressBar">
            <CircularProgressbarWithChildren
              value={percentage}
              styles={buildStyles({
                textColor: "#000",
                textSize: "12px",
                pathColor: "rgba(26, 156, 34)",
              })}
            >
              <div className="fadeInText">
                <h2>Well done!</h2>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <section className="saveData">
            <div className="activeTime">
              <p>Total active time</p>
              <p>{convertToMinutes(newStats.totalActiveTime)}m</p>
            </div>
            <div className="dataFlexBox">
              <div>
                <p className="number">{newStats.amountOfBreaks}</p>
                <p className="label">Breaks</p>
              </div>
              <div>
                <p className="number">
                  {convertToMinutes(newStats.totalTime)}m
                </p>
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
      </div>
    </>
  );
};

export default CompleteActivity;
