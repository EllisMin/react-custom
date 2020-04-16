import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const Header = ({ title }) => {
  return (
    <div className="main-header">
      <div className="main-header-inner">
        {title && <h1 style={{ fontSize: "1.5rem" }}>{`${title}`}</h1>}
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
