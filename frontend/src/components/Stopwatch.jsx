import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
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

  const [totalBreakTime, setTotalBreakTime] = useState(0);
  const [timeBeforeFirstBreak, setTimeBeforeFirstBreak] = useState(0);

  const [click, setClick] = useState(0);
  const [amountOfBreaks, setAmountOfBreaks] = useState(0);

  const location = useLocation();

  const saveDataForActivity = () => {
    const newStats = {
      totalActiveTime: time,
      totalBreakTime,
      timeBeforeFirstBreak,
      amountOfBreaks,
      activityId: location.state.activityId,
    };

    axios
      .post("http://localhost:3001/api/stats", newStats, {
        headers: {
          "Content-Type": "application/json",
        },
      })
     
  };

  const saveAmountOfBreaks = () => {
    setAmountOfBreaks(amountOfBreaks + 1);
  };

  const amountOfClicks = () => {
    setClick(click + 1);
  };

  const saveTime = () => {
    amountOfClicks();
    setIsRunning(false);
    if (click === 0) {
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

  return (
    <div className="stopwatch">
      <h1>{!location.state ? null : location.state.activityName}</h1>
      <div className="numbers">
        <span>{("0" + Math.floor(time / 3600000)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div className="numbers">
        <h3>Break</h3>
        <span>{("0" + Math.floor(breakTime / 3600000)).slice(-2)}:</span>
        <span>{("0" + Math.floor((breakTime / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((breakTime / 1000) % 60)).slice(-2)}</span>
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
          <button className="controlButton" onClick={() => startBreak()}>
            <MdOutlineFreeBreakfast />
          </button>
        ) : (
          <button className="controlButton" onClick={() => saveBreakTime()}>
            <RxResume />
          </button>
        )}
        <button className="controlButton" onClick={() => saveDataForActivity()}>
          <IoMdCheckmark />
        </button>
        <div style={{ width: 150, marginLeft: 550 }}></div>
      </div>
    </div>
  );
};

export default Stopwatch;
