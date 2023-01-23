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
  const [breakTime, setBreakTime] = useState(0);

  const [activeTime, setActiveTime] = useState(0);
  const [totalBreakTime, setTotalBreakTime] = useState(0);
  const [timeBeforeFirstBreak, setTimeBeforeFirstBreak] = useState(0);

  const savedTimeForActivities = [];

  const newSave = {
    activity: "",
    timeBeforeFirstBreak,
    activeTime: time,
    totalBreakTime,
  };

  const [click, setClick] = useState(0);

  const [amountOfBreaks, setAmountOfBreaks] = useState(0);

  const saveAmountOfBreaks = () => {
    setAmountOfBreaks(amountOfBreaks + 1);
    console.log(amountOfBreaks);
  };

  const amountOfClicks = () => {
    setClick(click + 1);
  };

  const saveTime = () => {
    amountOfClicks();
    setIsRunning(false);
    if (click === 0) {
      console.log("one click");
      setTimeBeforeFirstBreak(time);
    }
  };

  const startBreak = () => {
    saveAmountOfBreaks();
    setIsBreak(true);
  };

  const saveBreakTime = () => {
    setIsBreak(false);
    setTotalBreakTime(breakTime);
  };

  const saveDataForActivity = () => {
    savedTimeForActivities.push(newSave);
    console.log(savedTimeForActivities);
  }

  useEffect(() => {
    let interval;
    if (isBreak) {
      interval = setInterval(() => {
        setBreakTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isBreak) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isBreak]);

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

  // console.log(timeBeforeFirstBreak);
  // console.log(activeTime);

  console.log(totalBreakTime);

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{minutes}:</span>
        <span>{seconds}:</span>
        <span>{millis}</span>
      </div>
      <div className="numbers">
        <h3>Break</h3>
        <span>{("0" + Math.floor((breakTime / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((breakTime / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((breakTime / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        {!isRunning ? (
          <button className="controlButton" onClick={() => setIsRunning(true)}>
            <IoPlay />
          </button>
        ) : (
          <button className="controlButton" onClick={() => saveTime()}>
            <IoStop />
          </button>
        )}
        <button className="controlButton" onClick={() => setTime(0)}>
          <GrPowerReset />
        </button>
        {!isBreak ? (
          <button
            className="controlButton"
            onClick={() => startBreak()}
          >
            <MdOutlineFreeBreakfast />
          </button>
        ) : (
          <button className="controlButton" onClick={() => saveBreakTime()}>
            <RxResume />
          </button>
        )}
        <button className="controlButton" onClick={() =>  saveDataForActivity() }>
          <IoMdCheckmark />
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
