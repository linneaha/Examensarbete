import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChart from "../components/BarChart";

const Statistics = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/activities")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  // const calculateAverageTime = (arr1, arr2) => {};

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let filteredStats = stats.filter((stat) => stat.stats.length !== 0);

  let averageStatsForActivity = filteredStats.map((stat) => ({
    name: capitalizeFirstLetter(stat.name),
    averageActiveTime:
      stat.stats
        .map((stat) => stat.totalActiveTime)
        .reduce((prev, curr) => prev + curr) / stat.stats.length,
    averageBreakTime:
      stat.stats
        .map((stat) => stat.totalBreakTime)
        .reduce((prev, curr) => prev + curr) / stat.stats.length,
    averageTimeBeforeFirstBreak:
      stat.stats
        .map((stat) => stat.timeBeforeFirstBreak)
        .reduce((prev, curr) => prev + curr) / stat.stats.length,
    averageAmountOfBreaks:
      stat.stats
        .map((stat) => stat.amountOfBreaks)
        .reduce((prev, curr) => prev + curr) / stat.stats.length,
  }));

  // console.log(averageStatsForActivity);

  return (
    <div className="statsWrapper">
      <h1>Statistics</h1>
      <BarChart averageStatsForActivity={averageStatsForActivity} />
    </div>
  );
};

export default Statistics;
