import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const EditActivityForm = ({ onClose }) => {
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <button onClick={onClose}>Close</button>
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
};

export default EditActivityForm;
