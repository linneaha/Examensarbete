import React from "react";
import { useState } from "react";

const MoreModal = ({ open, close }) => {
  if (!open) {
    return null;
  }

  return (
    <>
      <div onClick={close} className="backdrop">
        <div className="modalContent">
          <ul>
            <li>Edit</li>
            <li>Delete</li>
          </ul>
          <button onClick={close}>Close</button>
        </div>
      </div>
    </>
  );
};

export default MoreModal;
