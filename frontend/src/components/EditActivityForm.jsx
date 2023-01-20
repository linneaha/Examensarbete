import React from "react";
import axios from "axios";
import { useState } from "react";
import Modal from "./Modal";

const EditActivityForm = ({ onClose, id }) => {
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = {
      newName,
    };

    axios.patch(`http://localhost:3001/api/activities`, name, {
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
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
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
