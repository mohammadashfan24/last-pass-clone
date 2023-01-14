import React from "react";
import "./modal.css";

function Modal({ modal, closeModals, index }) {
  return (
    <div className="lastpass-modal" style={{ zIndex: index }}>
      <div className="lastpass-modal__body">
        <div className="lastpass-modal__body-head">
          <div className="lastpass-modal__body-head-title">{modal.title}</div>
          <button
            className="lastpass-modal__body-head-close"
            type="button"
            onClick={() => {
              closeModals(index);
            }}
          >
            &times;
          </button>
        </div>

        <div className="lastpass-modal__body-content">
          {React.createElement(modal.render, {
            closeModal: () => closeModals(index)
          })}
        </div>
      </div>
    </div>
  );
}

export default Modal;
