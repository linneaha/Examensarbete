import React from "react";
import axios from "axios";
import { useState } from "react";
import Modal from "./Modal";
import { GrFormClose } from "react-icons/gr";

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
      <div className="modalWrapper">
        <GrFormClose onClick={onClose} className="exitBtn" />
        <h1>Edit task</h1>
        <form onSubmit={handleSubmit} className="editForm">
          <label htmlFor="newName">Name</label>
          <input
            type="text"
            id="newName"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditActivityForm;
