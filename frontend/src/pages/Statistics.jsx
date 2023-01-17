import React, { useEffect, useState } from 'react'
import axios from "axios";

const Statistics = () => {
const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, [])
  
  return (
    <div>
    {tasks.map((task) => (
      <p>{task.name}</p>
    ))}
    </div>
  )
}

export default Statistics