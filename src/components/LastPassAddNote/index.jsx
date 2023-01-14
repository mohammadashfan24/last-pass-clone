import classnames from "classnames";
import React, { useState } from "react";
import PropTypes from "prop-types";
import LastPassInput from "../LastPassInput";
import LastPassTextArea from "../LastPassTextArea";
import LastPassButton from "../LastPassButton";
import "./last-pass-add-note.css";

const defaultProps = {
  className: "",
  formData: {}
};

const propTypes = {
  className: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired
};

const LastPassAddNote = ({ className, onCancel, onSave, formData }) => {
  const [name, setName] = useState(formData.name);
  const [folder, setFolder] = useState(formData.folder);
  const [note, setNote] = useState(formData.note);

  return (
    <div
      className={classnames({
        "last-pass-add-note": true,
        [className]: className
      })}
    >
      <div className="last-pass-add-note__left-side">
        <div className="form-control">
          <label className="form-control__label">Name:</label>
          <LastPassInput
            className="last-pass-input--full-width"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label className="form-control__label">Folder:</label>
          <LastPassInput
            className="last-pass-input--full-width"
            value={folder}
            onChange={e => setFolder(e.target.value)}
          />
        </div>
      </div>

      <div className="last-pass-add-note__right-side">
        <LastPassTextArea
          className="last-pass-text-area--note"
          value={note}
          onChange={e => setNote(e.target.value)}
        />
        <div className="last-pass-add-note__buttons">
          <LastPassButton
            label="Cancel"
            className="last-pass-button--white"
            onClick={onCancel}
          />
          <LastPassButton
            label="Save"
            className="last-pass-button--red"
            onClick={() => {
              onSave({ name, folder, note, _id: formData._id });
            }}
          />
        </div>
      </div>
    </div>
  );
};

LastPassAddNote.defaultProps = defaultProps;
LastPassAddNote.propTypes = propTypes;
export default LastPassAddNote;
