import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { RxResume, RxClock } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import { IoPlay, IoStop } from "react-icons/io5";
import { MdOutlineFreeBreakfast, MdOutlineRefresh } from "react-icons/md";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CompleteActivity from "./CompleteActivity";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [mode, setMode] = useState("work");

  const [time, setTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [totalBreakTime, setTotalBreakTime] = useState(0);
  const [timeBeforeFirstBreak, setTimeBeforeFirstBreak] = useState(0);
  const [amountOfBreaks, setAmountOfBreaks] = useState(0);
  const [click, setClick] = useState(0);

  const orange = "rgba(247,114,25,255)";
  const blue = "rgba(67,152,209,255)";

  const location = useLocation();

  const activityName = !location.state ? "" : location.state.activityName;
  const activityIcon = !location.state
    ? "icons/time-management.png"
    : location.state.activityIcon;

  const newStats = {
    totalActiveTime: time,
    totalBreakTime,
    totalTime: time + totalBreakTime,
    timeBeforeFirstBreak,
    amountOfBreaks,
    activityId: !location.state ? null : location.state.activityId,
  };

  const toggleCompleteModal = () => {
    setToggleModal(!toggleModal);
  };

  const saveDataForActivity = () => {
    toggleCompleteModal();

    axios.post("http://localhost:3001/api/stats", newStats, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const startRunning = () => {
    if (mode === "work") {
      setIsRunning(true);
      setMode("work");
      saveBreakTime();
    } else {
      amountOfClicks();
      startBreak();
      setIsRunning(false);
      if (click === 0) {
        setTimeBeforeFirstBreak(time);
      }
    }
  };

  const saveAmountOfBreaks = () => {
    setAmountOfBreaks(amountOfBreaks + 1);
  };

  const amountOfClicks = () => {
    setClick(click + 1);
  };

  const stopTime = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTotalBreakTime(breakTime);
  };

  const startBreak = () => {
    saveAmountOfBreaks();
    setIsBreak(true);
    setMode("break");
  };

  const saveBreakTime = () => {
    setIsBreak(false);
    setTotalBreakTime(breakTime);
  };

  const resetTimer = () => {
    setTime(0);
    setBreakTime(0);
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
    <div className="stopwatchWrapper">
      <div className="headerWrapper">
        <h1>{activityName}</h1>
      </div>
      <div className="progressBarWrapper">
        <CircularProgressbarWithChildren
          value={mode === "work" && time / 36000}
          strokeWidth={8}
          styles={buildStyles({
            pathColor: orange,
            tailColor: "rgba(255,255,255,.2)",
          })}
        >
          {/*
          Width here needs to be (100 - 2 * strokeWidth)% 
          in order to fit exactly inside the outer progressbar.
        */}
          <div style={{ width: "83%" }}>
            <CircularProgressbarWithChildren
              value={mode === "break" && breakTime / 36000}
              styles={buildStyles({
                pathColor: blue,
                tailColor: "rgba(255,255,255,.2)",
                // trailColor: "transparent",
              })}
            >
              {mode === "work" ? (
                <img
                  src={activityIcon}
                  className="stopwatchIcons"
                  alt="clock icon"
                />
              ) : (
                <img
                  src="icons/coffee-cup.png"
                  className="stopwatchIcons"
                  alt="break icon"
                />
              )}
              <div className="time">
                {mode === "work"
                  ? formatTime(time).formattedString
                  : formatTime(breakTime).formattedString}
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </CircularProgressbarWithChildren>
        {/* <CircularProgressbarWithChildren
          value={mode === "work" ? time / 36000 : breakTime / 36000}
          styles={buildStyles({
            pathColor: mode === "work" ? orange : blue,
            tailColor: "rgba(255,255,255,.2)",
          })}
        >
          {mode === "work" ? (
            <img
              src={activityIcon}
              className="stopwatchIcons"
              alt="clock icon"
            />
          ) : (
            <img
              src="icons/coffee-cup.png"
              className="stopwatchIcons"
              alt="break icon"
            />
          )}
          <div className="time">
            {mode === "work"
              ? formatTime(time).formattedString
              : formatTime(breakTime).formattedString}
          </div>
        </CircularProgressbarWithChildren> */}
        <div>
          <button
            className={`modeButton ${mode === "work" ? "workMode" : ""}`}
            onClick={() => setMode("work")}
          >
            <RxClock />
          </button>
          <button
            className={`modeButton ${mode === "break" ? "breakMode" : ""}`}
            onClick={() => setMode("break")}
          >
            <MdOutlineFreeBreakfast />
          </button>
        </div>
      </div>
      <div className="buttonWrapper">
        {!isRunning && !isBreak ? (
          <button className="controlButton" onClick={() => startRunning()}>
            <IoPlay />
          </button>
        ) : (
          <button className="controlButton" onClick={() => stopTime()}>
            <IoStop />
          </button>
        )}
        <button className="controlButton" onClick={() => resetTimer()}>
          <MdOutlineRefresh />
        </button>
        <button className="controlButton" onClick={() => saveDataForActivity()}>
          <IoMdCheckmark />
        </button>
        <div style={{ width: 150, marginLeft: 550 }}></div>
      </div>
      {toggleModal && (
        <CompleteActivity
          toggleCompleteModal={toggleCompleteModal}
          newStats={newStats}
          activityName={activityName}
        />
      )}
    </div>
  );
};

export default Stopwatch;
