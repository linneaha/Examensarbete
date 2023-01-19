import React, { useEffect, useState } from "react";
import axios from "axios";

import ActivityItem from "../components/ActivityItem";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/activities")
      .then((res) => setActivities(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="activityListWrapper">
      <h1>Activities</h1>
      <ul className="activityList">
        {activities.map((activity) => (
          <li key={activity._id}>
            <ActivityItem activityId={activity._id} name={activity.name} />
          </li>
        ))}
      </ul>
      <button className="addActivityBtn">+ Add new activity</button>
    </div>
  );
};

export default Activities;
