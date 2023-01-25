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

  return (
    <div className="statsDiv">
      <h1>Statistik</h1>
      {stats.map((stat) => (
        <div key={stat._id}>
          <p>{stat.name}</p>
          <p>Aktiv tid: {stat.stats[0].totalActiveTime}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
