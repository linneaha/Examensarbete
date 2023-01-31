import React, { useEffect, useState } from "react";
import axios from "axios";
import ActivityItem from "../components/ActivityItem";
import AddActivityForm from "../components/AddActivityForm";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [iconList, setIconList] = useState([
    {
      title: "book",
      image: require("../assets/book.png"),
      selected: false,
    },
    {
      title: "checklist",
      image: require("../assets/checklist.png"),
      selected: false,
    },

    {
      title: "cleaning",
      image: require("../assets/cleaning.png"),
      selected: false,
    },

    {
      title: "cooking",
      image: require("../assets/cooking.png"),
      selected: false,
    },

    {
      title: "grocery",
      image: require("../assets/grocery.png"),
      selected: false,
    },

    {
      title: "shower",
      image: require("../assets/grooming.png"),
      selected: false,
    },

    {
      title: "washing dishes",
      image: require("../assets/wash.png"),
      selected: false,
    },

    {
      title: "washing machine",
      image: require("../assets/washing-machine.png"),
      selected: false,
    },
  ]);

  const onIconClick = (e) => {
    const selected = iconList.map((icon) => ({
      ...icon,
      selected: e.target.id !== icon.title ? false : true,
    }));
    setIconList(selected);
  };

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
                iconList={iconList}
              />
            </li>
          ))}
        </ul>
        <button className="addActivityBtn" onClick={toggleModal}>
          + Add new activity
        </button>
      </div>
      {openModal && (
        <AddActivityForm
          toggleModal={toggleModal}
          iconList={iconList}
          onIconClick={onIconClick}
        />
      )}
    </>
  );
};

export default Activities;
