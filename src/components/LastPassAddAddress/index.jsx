import classnames from "classnames";
import React, { useState } from "react";
import PropTypes from "prop-types";
import LastPassInput from "../LastPassInput";
import LastPassButton from "../LastPassButton";
import "./last-pass-add-address.css";

const defaultProps = {
  className: "",
  formData: {}
};

const propTypes = {
  className: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  formData: PropTypes.object
};

const LastPassAddAddress = ({ className, onCancel, onSave, formData }) => {
  const [name, setName] = useState(formData.name);
  const [folder, setFolder] = useState(formData.folder);
  const [address, setAddress] = useState(formData.address);
  const [country, setCountry] = useState(formData.country);
  const [city, setCity] = useState(formData.city);
  return (
    <div
      className={classnames({
        "last-pass-add-address": true,
        [className]: className
      })}
    >
      <div className="last-pass-add-address-container">
        <div className="last-pass-add-address__left-side">
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
        <div className="last-pass-add-address__right-side">
          <table>
            <tr>
              <td>Address</td>
              <td>
                <LastPassInput
                  className="last-pass-input--full-width-grey"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <LastPassInput
                  className="last-pass-input--full-width-grey"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Country</td>
              <td>
                <LastPassInput
                  className="last-pass-input--full-width-grey"
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="last-pass-button-holder">
        <LastPassButton
          label="cancel"
          className="last-pass-button--white"
          onClick={onCancel}
        />
        <LastPassButton
          label="save"
          className="last-pass-button--red"
          onClick={() => {
            onSave({ name, folder, address, city, country, _id: formData._id });
          }}
        />
      </div>
    </div>
  );
};

LastPassAddAddress.defaultProps = defaultProps;
LastPassAddAddress.propTypes = propTypes;
export default LastPassAddAddress;
