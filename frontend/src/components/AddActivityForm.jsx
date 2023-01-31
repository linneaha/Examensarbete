import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import axios from "axios";
import Modal from "./Modal";

const AddActivityForm = ({ toggleModal, iconList, onIconClick }) => {
  const [name, setName] = useState("");
  // const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const activity = {
      name,
    };

    axios
      .post("http://localhost:3001/api/activities", activity, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(toggleModal());
  };


  const click = (e) => {
   
    console.log([e.target.id])
  }
  
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
                <img src={icon.image} alt={icon.title} className={icon.selected ? "withBorder" : "noBorder" } id={icon.title} onClick={(e) => onIconClick(e)} key={i}/>
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
