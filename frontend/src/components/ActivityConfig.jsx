import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import EditActivityForm from "./EditActivityForm";
import DeleteActivityForm from "./DeleteActivityForm";

const ActivityConfig = ({ id, onClose, deleteActivity }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  const handleEditForm = () => {
    setShowEditForm(true);
  };

  const handleDeleteForm = () => {
    setShowDeleteForm(true);
  };

  return (
    <Modal onClose={onClose}>
      <div>
        <div className="modalContent">
          <div onClick={handleEditForm}>Edit</div>
          {showEditForm && <EditActivityForm id={id} onClose={onClose} />}

          <div onClick={handleDeleteForm}>Delete</div>
          {showDeleteForm && (
            <DeleteActivityForm
              id={id}
              onClose={onClose}
              deleteActivity={deleteActivity}
            />
          )}

          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default ActivityConfig;
