import React from "react";
import { RiPlayCircleFill, RiMore2Fill } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActivityConfig from "./ActivityConfig";

const ActivityItem = ({ id, name }) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  console.log(id, name);
  const navigate = useNavigate();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const showModalHandler = () => {
    setModalIsShown(true);
  };
  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  const handleStartButton = () => {
    navigate("/");
  };
  return (
    <div className="listItemDiv">
      <img src="https://via.placeholder.com/50" alt="icon" />
      {capitalizeFirstLetter(name)}
      <button className="activityBtn" onClick={handleStartButton}>
        <RiPlayCircleFill />
      </button>
      <button className="activityBtn" onClick={showModalHandler}>
        <RiMore2Fill />
      </button>
      {modalIsShown && <ActivityConfig id={id} onClose={hideModalHandler} />}
    </div>
  );
};

export default ActivityItem;
