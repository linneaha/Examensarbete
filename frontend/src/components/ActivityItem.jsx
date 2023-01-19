import React from "react";
import { RiPlayCircleFill, RiMore2Fill } from "react-icons/ri";
import { useState } from "react";
import More from "./More";

const ActivityItem = ({ id, name }) => {
  const [openModal, setOpenModal] = useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="listItemDiv">
      <img src="https://via.placeholder.com/50" alt="icon" />
      {capitalizeFirstLetter(name)}
      <RiPlayCircleFill />

      <RiMore2Fill onClick={() => setOpenModal(true)} />
      <div>
        <More
          id={id}
          name={name}
          open={openModal}
          close={() => setOpenModal(false)}
        />
      </div>
    </div>
  );
};

export default ActivityItem;
