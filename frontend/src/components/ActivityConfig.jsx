import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import EditActivityForm from "./EditActivityForm";
import DeleteActivityForm from "./DeleteActivityForm";
import { GrFormClose } from "react-icons/gr";

const ActivityConfig = ({ id, onClose, deleteActivity, iconList }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  const [showForm, setShowForm] = useState(true);
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
        <button className="editBtn" onClick={handleEditForm}>
          Edit
        </button>
        {showEditForm && <EditActivityForm id={id} onClose={onClose} iconList={iconList}/>}

        <button className="editBtn" onClick={handleDeleteForm}>
          Delete
        </button>
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
