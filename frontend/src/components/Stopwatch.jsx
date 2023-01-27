import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { RxResume } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import { IoPlay, IoStop } from "react-icons/io5";
import { MdOutlineFreeBreakfast, MdSwapVerticalCircle } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [breakTime, setBreakTime] = useState(0);
  const [totalBreakTime, setTotalBreakTime] = useState(0);
  const [timeBeforeFirstBreak, setTimeBeforeFirstBreak] = useState(0);
  const [amountOfBreaks, setAmountOfBreaks] = useState(0);
  const [click, setClick] = useState(0);
  const [mode, setMode] = useState("work");

  const orange = "#FFBB50";
  const blue = "#5094FF";

  const location = useLocation();

  const saveDataForActivity = () => {
    const newStats = {
      totalActiveTime: time,
      totalBreakTime,
      timeBeforeFirstBreak,
      amountOfBreaks,
      activityId: location.state.activityId,
    };

    axios.post("http://localhost:3001/api/stats", newStats, {
      headers: {
        "Content-Type": "application/json",
      },
    });
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

  const formatTime = (time) => {
    let hours = ("0" + Math.floor(time / 3600000)).slice(-2),
      minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2),
      seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    let formattedString = `${hours}:${minutes}:${seconds}`;
    return { hours, minutes, seconds, formattedString };
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
      <div>
        <h1>{!location.state ? null : location.state.activityName}</h1>
      </div>
      <CircularProgressbar
        value={isRunning ? time / 36000 : breakTime / 36000}
        text={
          isRunning
            ? formatTime(time).formattedString
            : formatTime(breakTime).formattedString
        }
        styles={buildStyles({
          textColor: "#000",
          pathColor: mode === "work" ? orange : blue,
          tailColor: "rgba(255,255,255,.2)",
        })}
      />
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
