import React, { useState } from "react";
import axios from "axios";

const AddActivityForm = ({toggleModal}) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {

    const activity = {
        name
      };

    e.preventDefault();
    fetch("http://localhost:3001/api/activities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(activity)
      }).then(toggleModal());
  }


  return (
    <div className="addNewActivityModal">
      <h1>Add new Activity</h1>
      <p onClick={toggleModal}>Close</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name}/>
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default AddActivityForm;
