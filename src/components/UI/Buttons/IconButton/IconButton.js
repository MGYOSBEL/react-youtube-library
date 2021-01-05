import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButton = (props) => (
  <button onClick={props.clicked} className="text-center mx-1 my-0.5 p-1 transform hover:scale-125 focus:outline-none">
    <FontAwesomeIcon icon={[...props.icons]} />
  </button>
);

export default IconButton;

IconButton.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  clicked: PropTypes.func.isRequired,
};
