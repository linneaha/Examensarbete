import React, { useEffect, useState } from "react";
import axios from "axios";

const Statistics = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="statsDiv">
      {tasks.map((task) => (
        <p key={task._id}>{task.name}</p>
      ))}
    </div>
  );
};

export default Statistics;
