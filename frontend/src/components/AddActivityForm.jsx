import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import axios from "axios";
import Modal from "./Modal";

const AddActivityForm = ({ toggleModal }) => {
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

  return (
    <Modal onClose={toggleModal}>
      <div className="modalWrapper">
        <GrFormClose onClick={toggleModal} className="exitBtn" />
        <h1>Add new activity</h1>
        <form className="addActivityForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type="submit">+</button>
        </form>
      </div>
    </Modal>
  );
};

export default AddActivityForm;
