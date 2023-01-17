import React, { useState, useEffect } from "react";
import { RxResume } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import { IoPlay, IoStop } from "react-icons/io5";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        {!running ? (
          <button onClick={() => setRunning(true)}>
            <IoPlay />
          </button>
        ) : (
          <button onClick={() => setRunning(false)}>
            <IoStop />
          </button>
        )}
        <button onClick={() => setTime(0)}>
          <GrPowerReset />
        </button>
        {!isBreak ? (
          <button onClick={() => setIsBreak(true)}>
            <MdOutlineFreeBreakfast />
          </button>
        ) : (
          <button onClick={() => setIsBreak(false)}>
            <RxResume />
          </button>
        )}
        <button>
          <IoMdCheckmark />
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
