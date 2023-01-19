import React, { useEffect, useState } from "react";
import axios from "axios";

import ActivityItem from "../components/ActivityItem";
import AddActivityForm from "../components/AddActivityForm";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let toggleModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/activities")
      .then((res) => setActivities(res.data))
      .catch((err) => console.log(err));
  }, [openModal]);

  return (
    <>
      {!openModal ? (
        <div className="activityListWrapper">
          <h1>Activities</h1>
          <ul className="activityList">
            {activities.map((activity) => (
              <li key={activity._id}>
                <ActivityItem id={activity._id} name={activity.name} />
              </li>
            ))}
          </ul>
          <button className="addActivityBtn" onClick={toggleModal}>
            + Add new activity
          </button>
        </div>
      ) : (
        <AddActivityForm toggleModal={toggleModal} />
      )}
    </>
  );
};

export default Activities;
