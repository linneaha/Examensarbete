import Modal from "./Modal";

const DeleteActivityForm = ({ onClose, id, deleteActivity }) => {
  return (
    <Modal onClose={onClose}>
      <div className="deleteModalWrapper">
        <h1>Delete task?</h1>
        <p>Chart data will also be deleted if any data exists.</p>
        <form
          onSubmit={() => {
            deleteActivity(id);
          }}
        >
          <button onClick={onClose}>Cancel</button>
          <button type="submit">Delete</button>
        </form>
      </div>
    </Modal>
  );
};

export default DeleteActivityForm;
