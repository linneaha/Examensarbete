import React, { useEffect, useState } from "react";
import axios from "axios";

const Statistics = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/activities")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  const convertTime = (num) => {
    if (num === 0) {
      return "No data recorded!";
    } else {
      var minutes = Math.floor(num / 60000);
      var seconds = ((num % 60000) / 1000).toFixed(0);
      var hours = minutes % 60;
      return (
        hours +
        (hours < 10 ? "0" : "") +
        ":" +
        minutes +
        (minutes < 10 ? "0" : "") +
        ":" +
        (seconds < 10 ? "0" : "") +
        seconds
      );
    }
  };

  const calculateAverageTime = (arr1, arr2) => {};

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let averageStatsForActivity = stats.map((stat) => ({
    name: capitalizeFirstLetter(stat.name),
    averageActiveTime:
      stat.stats.length === 0
        ? 0
        : stat.stats
            .map((stat) => stat.totalActiveTime)
            .reduce((prev, curr) => prev + curr) / stat.stats.length,
    averageBreakTime:
      stat.stats.length === 0
        ? 0
        : stat.stats
            .map((stat) => stat.totalBreakTime)
            .reduce((prev, curr) => prev + curr) / stat.stats.length,
    averageTimeBeforeFirstBreak:
      stat.stats.length === 0
        ? 0
        : stat.stats
            .map((stat) => stat.timeBeforeFirstBreak)
            .reduce((prev, curr) => prev + curr) / stat.stats.length,
    averageAmountOfBreaks:
      stat.stats.length === 0
        ? 0
        : stat.stats
            .map((stat) => stat.amountOfBreaks)
            .reduce((prev, curr) => prev + curr) / stat.stats.length,
  }));

  console.log(averageStatsForActivity);

  return (
    <div className="statsWrapper">
      <h1>Statistik</h1>
      {averageStatsForActivity.map((stat, i) => (
        <div key={i}>
          <h3>{stat.name}</h3>
          <p>Average active time: {convertTime(stat.averageActiveTime)}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
