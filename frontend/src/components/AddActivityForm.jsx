import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import axios from "axios";
import Modal from "./Modal";

const AddActivityForm = ({ toggleModal, iconList, onIconClick, icon }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const activity = {
      name,
      icon
    };

    axios
      .post("http://localhost:3001/api/activities", activity, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(toggleModal());
  };

  return (
    <Modal onClose={toggleModal}>
      <div className="modalWrapper">
        <GrFormClose onClick={toggleModal} className="exitBtn" />
        <h1>Add activity</h1>
        <form className="activityForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div>
            <label>Choose icon</label>
            <div className="iconGrid">
              {iconList.map((icon, i) => (
                <div
                  key={i}
                  className={icon.selected ? "withBorder" : "noBorder"}
                >
                  <img
                    src={icon.image}
                    alt={icon.title}
                    id={icon.title}
                    onClick={(e) => onIconClick(e)}
                  />
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className="addBtn">
            +
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddActivityForm;
