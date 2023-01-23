import React, { useState, useEffect } from "react";
import { RxResume } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import { IoPlay, IoStop } from "react-icons/io5";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  let seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  let millis = ("0" + ((time / 10) % 100)).slice(-2);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{minutes}:</span>
        <span>{seconds}:</span>
        <span>{millis}</span>
      </div>
      <div className="buttons">
        {!isRunning ? (
          <button className="controlButton" onClick={() => setIsRunning(true)}>
            <IoPlay />
          </button>
        ) : (
          <button className="controlButton" onClick={() => setIsRunning(false)}>
            <IoStop />
          </button>
        )}
        <button className="controlButton" onClick={() => setTime(0)}>
          <GrPowerReset />
        </button>
        {!isBreak ? (
          <button className="controlButton" onClick={() => setIsBreak(true)}>
            <MdOutlineFreeBreakfast />
          </button>
        ) : (
          <button className="controlButton" onClick={() => setIsBreak(false)}>
            <RxResume />
          </button>
        )}
        <button className="controlButton">
          <IoMdCheckmark />
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
