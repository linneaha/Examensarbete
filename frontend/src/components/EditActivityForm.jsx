import React from "react";
import axios from "axios";
import { useState } from "react";
import Modal from "./Modal";
import { GrFormClose } from "react-icons/gr";

const EditActivityForm = ({ onClose, id, iconList, onIconClick, icon }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = {
      name,
      icon
    };
    axios
      .put(`http://localhost:3001/api/activities/${id}`, newName, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(onClose());
  };

  return (
    <Modal onClose={onClose}>
      <div className="modalWrapper">
        <GrFormClose onClick={onClose} className="exitBtn" />
        <h1>Edit task</h1>
        <form onSubmit={handleSubmit} className="activityForm">
          <div>
            <label htmlFor="newName">Name</label>
            <input
              type="text"
              id="newName"
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
          <div>
            <button type="submit" className="saveBtn">
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditActivityForm;
