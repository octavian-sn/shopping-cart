import React from 'react';
import '../styles/fancy-window.css';
import PropTypes from 'prop-types';

function FancyWindow({ size, children }) {
  return (
    <div className={`fancy-window ${size}`}>
      <div className="upper border"></div>
      <div className="content">{children}</div>
      <div className="lower border"></div>
    </div>
  );
}

export default FancyWindow;

// FancyWindow.defaultProps = { size: 'big' };
FancyWindow.propTypes = { size: PropTypes.oneOf(['big', 'small']).isRequired };
