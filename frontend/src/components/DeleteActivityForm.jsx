import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import axios from "axios";
import Modal from "./Modal";

const DeleteActivityForm = ({ closeFn = () => null, open = false }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // axios.delete(
    //   `http://localhost:3001/api/activities/${id}`,
    //   id,

    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
  };

  return (
    <Modal>
      <h1>Delete task?</h1>
      <form onSubmit={handleSubmit}>
        <p>Chart data will also be deleted if any data exists.</p>
        <button onClick={closeFn}>Cancel</button>
        <button type="submit">Delete</button>
      </form>
    </Modal>
  );
};

export default DeleteActivityForm;
