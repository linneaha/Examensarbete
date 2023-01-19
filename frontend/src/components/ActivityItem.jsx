import React from "react";
import { RiPlayCircleFill, RiMore2Fill } from "react-icons/ri";
import { useState } from "react";
import MoreModal from "./MoreModal";

const ActivityItem = ({ name }) => {
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
        <MoreModal open={openModal} close={() => setOpenModal(false)} />
      </div>
    </div>
  );
};

export default ActivityItem;
