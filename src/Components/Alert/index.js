import React from "react";

import "./styles.scss";

const Alert = ({ message, error, onClose }) => {
  return (
    <>
      {message && (
        <div className={`${error ? "alert-error" : ""} alert-custom`}>
          <div />
          <p>{message}</p>
          {onClose && (
            <button className="close-custom" onClick={onClose}>
              <span>×</span>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Alert;
