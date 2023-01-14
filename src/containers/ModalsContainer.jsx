import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLOSE_MODAL } from "../redux/actions/modalActions";
import Modal from "../components/Modal";

const getZIndexForModal = index => {
  return index;
};

const ModalsContainer = () => {
  const dispatch = useDispatch();
  const modals = useSelector(state => {
    return state.modals.list;
  });

  const closeModals = index => {
    dispatch({ type: CLOSE_MODAL, modalIndex: index });
  };

  return (
    <Fragment>
      {modals.length > 0 && <div className="lastpass-modal-backdrop"></div>}
      {modals.length > 0 && (
        <div className="lastpass-modals">
          {modals.map((modal, index) => (
            <Modal
              modal={modal}
              closeModals={closeModals}
              index={getZIndexForModal(index)}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default ModalsContainer;
