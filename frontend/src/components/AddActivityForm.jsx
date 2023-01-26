import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import axios from "axios";

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
    <div className="addNewActivityModal">
      <h1>Add new activity</h1>
      <form className="addActivityForm" onSubmit={handleSubmit}>
        <GrFormClose onClick={toggleModal} className="exitBtn" />
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
  );
};

export default AddActivityForm;
