import React from "react";

import "./styles.scss";

const Button = ({ children, disabled, loading, ...others }) => {
  return (
    <button className={`btn-custom`} {...others} disabled={disabled || loading}>
      {children}
    </button>
  );
};

export default Button;
