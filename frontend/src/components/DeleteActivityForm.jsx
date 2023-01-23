import axios from "axios";
import Modal from "./Modal";

const DeleteActivityForm = ({ onClose, id }) => {
  console.log(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.delete(`http://localhost:3001/api/activities/${id}`, id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
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
