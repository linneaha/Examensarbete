import React from "react";
import Modal from "./Modal";

const EditActivityForm = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div>
        <h1>Edit modal</h1>
        <button onClick={closeFn}>Close</button>
      </div>
    </Modal>
  );
};

export default EditActivityForm;
