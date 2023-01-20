import React from "react";
import { RiPlayCircleFill, RiMore2Fill } from "react-icons/ri";
import { useState } from "react";
import ActivityConfig from "./ActivityConfig";

const ActivityItem = ({ id, name }) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  console.log(id, name);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const showModalHandler = () => {
    setModalIsShown(true);
  };
  const hideModalHandler = () => {
    setModalIsShown(false);
  };
  return (
    <div className="listItemDiv">
      <img src="https://via.placeholder.com/50" alt="icon" />
      {capitalizeFirstLetter(name)}
      <RiPlayCircleFill />

      <RiMore2Fill onClick={showModalHandler} />
      {modalIsShown && <ActivityConfig onClose={hideModalHandler} />}
    </div>
  );
};

export default ActivityItem;
