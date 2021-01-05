import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({ show, clicked }) =>
  show ? (
    <div
      className="fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-50 z-10"
      onClick={clicked}
      onKeyDown={clicked}
      role="button"
      tabIndex="0"
    ></div>
  ) : null;

export default Backdrop;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};
