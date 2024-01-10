import React from "react";

export default function CountryModal({ visible, onClose }) {
  if (!visible) return null;

  const handleClickClose = (e) => {
    if (e.target.id === "modal_container") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
      onClick={handleClickClose}
      id="modal_container"
    >
      <div className="bg-white p-2 rounded-lg w-5/6 h-[1100px]">
        <div className=""></div>
      </div>
    </div>
  );
}
