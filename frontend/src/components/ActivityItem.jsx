import React from "react";
import { RiPlayCircleFill, RiMore2Fill } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActivityConfig from "./ActivityConfig";

const ActivityItem = ({
  id,
  name,
  deleteActivity,
  iconList,
  onIconClick,
  icon,
  activityIcon,
}) => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const navigate = useNavigate();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  const handleStartButton = () => {
    navigate("/", {
      state: {
        activityId: id,
        activityName: name,
      },
    });
  };

  return (
    <div className="listItemDiv">
      <img src={activityIcon} alt="icon" className="icon" />
      <h3>{capitalizeFirstLetter(name)}</h3>
      <button className="activityBtn" onClick={handleStartButton}>
        <RiPlayCircleFill />
      </button>
      <button className="activityBtn" onClick={showModalHandler}>
        <RiMore2Fill />
      </button>
      {modalIsShown && (
        <ActivityConfig
          id={id}
          onClose={hideModalHandler}
          deleteActivity={deleteActivity}
          iconList={iconList}
          icon={icon}
          onIconClick={onIconClick}
        />
      )}
    </div>
  );
};

export default ActivityItem;
