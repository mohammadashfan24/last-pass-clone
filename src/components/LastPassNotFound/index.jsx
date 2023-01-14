import React from "react";
import { Link } from "react-router-dom";
import "./last-pass-not-found.css";

function LastPassNotFound(props) {
  return (
    <div className="last-pass-not-found">
      <div className="last-pass-not-found__title">404</div>

      <div className="last-pass-not-found__link">
        Go to <Link to="/home">Home</Link>
      </div>
    </div>
  );
}

export default LastPassNotFound;
