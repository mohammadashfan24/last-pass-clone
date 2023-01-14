import classnames from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "react";
import LastPassButton from "../LastPassButton";
import LastPassInput from "../LastPassInput";
import LastPassTextArea from "../LastPassTextArea";
import "./last-pass-add-password.css";

const defaultProps = {
  formData: {}
};

const propTypes = {
  className: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  formData: PropTypes.object
};

const LastPassAddPassword = ({ className, onCancel, onSave, formData }) => {
  const [site, setSite] = useState(formData.site);
  const [name, setName] = useState(formData.name);
  const [folder, setFolder] = useState(formData.folder);
  const [userName, setUserName] = useState(formData.userName);
  const [password, setPassword] = useState(formData.password);
  const [additionalInfo, setAdditionalInfo] = useState(formData.additionalInfo);

  return (
    <div
      className={classnames({
        "last-pass-add-password": true,
        [className]: className
      })}
    >
      <div className="form-control">
        <label className="form-control__label">Url</label>
        <LastPassInput
          className="last-pass-input--full-width"
          value={site}
          onChange={e => setSite(e.target.value)}
        />
      </div>

      <div className="row">
        <div className="form-control column">
          <label className="form-control__label">Name:</label>
          <LastPassInput
            className="last-pass-input--full-width"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="form-control column">
          <label className="form-control__label">Folder:</label>
          <LastPassInput
            className="last-pass-input--full-width"
            value={folder}
            onChange={e => setFolder(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="form-control column">
          <label className="form-control__label">User Name:</label>
          <LastPassInput
            className="last-pass-input--full-width"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </div>

        <div className="form-control column">
          <label className="form-control__label">Site Password:</label>
          <LastPassInput
            className="last-pass-input--full-width"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="form-control column">
          <label className="form-control__label">Notes:</label>
          <LastPassTextArea
            className="last-pass-input--full-width"
            value={additionalInfo}
            onChange={e => setAdditionalInfo(e.target.value)}
          />
        </div>
      </div>

      <div className="last-pass-add-note__buttons">
        <LastPassButton
          label="cancel"
          className="last-pass-button--white"
          onClick={onCancel}
        />
        <LastPassButton
          label="save"
          className="last-pass-button--red"
          onClick={() => {
            onSave({
              site,
              name,
              folder,
              userName,
              password,
              additionalInfo,
              _id: formData._id
            });
          }}
        />
      </div>
    </div>
  );
};

LastPassAddPassword.defaultProps = defaultProps;
LastPassAddPassword.propTypes = propTypes;
export default LastPassAddPassword;
