import axios from "axios";
import Modal from "./Modal";

const DeleteActivityForm = ({ onClose, name, id }) => {
  console.log(name, id);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal onClose={onClose}>
      <h1>Delete task?</h1>
      <form onSubmit={handleSubmit}>
        <p>Chart data will also be deleted if any data exists.</p>
        <button onClick={onClose}>Cancel</button>
        <button type="submit">Delete</button>
      </form>
    </Modal>
  );
};

export default DeleteActivityForm;
