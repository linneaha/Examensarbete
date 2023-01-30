import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import EditActivityForm from "./EditActivityForm";
import DeleteActivityForm from "./DeleteActivityForm";
import { GrFormClose } from "react-icons/gr";

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
      <div className="activityConfigModalWrapper">
      <GrFormClose onClick={onClose} className="exitBtn" />
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
      </div>
    </Modal>
  );
};

export default ActivityConfig;
