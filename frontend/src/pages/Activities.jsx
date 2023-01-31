import React, { useEffect, useState } from "react";
import axios from "axios";
import ActivityItem from "../components/ActivityItem";
import AddActivityForm from "../components/AddActivityForm";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  let toggleModal = () => {
    setOpenModal(!openModal);
  };

  const deleteActivity = (id) => {
    axios
      .delete(`http://localhost:3001/api/activities/${id}`, id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const filteredActivities = activities.filter(
          (activity) => activity.id !== id
        );
        setActivities(filteredActivities);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/activities")
      .then((res) => setActivities(res.data))
      .catch((err) => console.log(err));
  }, [openModal]);

  return (
    <>
      <div className="activityListWrapper">
        <h1>Activities</h1>
        <ul className="activityList">
          {activities.map((activity) => (
            <li key={activity._id}>
              <ActivityItem
                id={activity._id}
                name={activity.name}
                deleteActivity={deleteActivity}
                toggleModal={toggleModal}
              />
            </li>
          ))}
        </ul>
        <button className="addActivityBtn" onClick={toggleModal}>
          + Add new activity
        </button>
      </div>
      {openModal && <AddActivityForm toggleModal={toggleModal} />}
    </>
  );
};

export default Activities;
