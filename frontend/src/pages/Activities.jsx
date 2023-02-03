import React, { useEffect, useState } from "react";
import axios from "axios";
import ActivityItem from "../components/ActivityItem";
import AddActivityForm from "../components/AddActivityForm";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [icon, setIcon] = useState("");
  const [iconList, setIconList] = useState([
    {
      title: "book",
      image: "icons/book.png",
      selected: false,
    },
    {
      title: "checklist",
      image: "icons/checklist.png",
      selected: false,
    },
    {
      title: "cleaning",
      image: "icons/cleaning.png",
      selected: false,
    },
    {
      title: "cooking",
      image: "icons/cooking.png",
      selected: false,
    },
    {
      title: "grocery",
      image: "icons/grocery.png",
      selected: false,
    },
    {
      title: "shower",
      image: "icons/grooming.png",
      selected: false,
    },
    {
      title: "washing dishes",
      image: "icons/wash.png",
      selected: false,
    },
    {
      title: "washing machine",
      image: "icons/washing-machine.png",
      selected: false,
    },
  ]);

  const onIconClick = (e) => {
    const word = "icons";

    const iconPath = e.target.src.slice(e.target.src.indexOf(word));
    setIcon(iconPath);

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
  }, []);

  return (
    <>
      <div className="activityListWrapper">
        <h1>Activities</h1>
        <ul className="activityList">
          {activities.map((activity) => (
            <li key={activity._id}>
              <ActivityItem
                activityIcon={activity.icon}
                icon={icon}
                id={activity._id}
                name={activity.name}
                deleteActivity={deleteActivity}
                iconList={iconList}
                onIconClick={onIconClick}
              />
            </li>
          ))}
        </ul>
        <button className="addActivityBtn" onClick={toggleModal}>
          + Add activity
        </button>
      </div>
      {openModal && (
        <AddActivityForm
          toggleModal={toggleModal}
          iconList={iconList}
          icon={icon}
          onIconClick={onIconClick}
        />
      )}
    </>
  );
};

export default Activities;
