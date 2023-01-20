import React from "react";
import axios from "axios";
import { useState } from "react";
import Modal from "./Modal";

const EditActivityForm = ({ onClose, id }) => {
  console.log(id);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = {
      name,
    };

    axios.put(`http://localhost:3001/api/activities/${id}`, newName, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Modal onClose={onClose}>
      <h1>Edit task</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newName">Name</label>
        <input
          type="text"
          id="newName"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <div>
          <button onClick={onClose}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditActivityForm;
