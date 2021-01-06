import React from 'react';
import PropTypes from 'prop-types';

import Transition from '../../../Transition';

const Backdrop = ({ show, clicked }) => {
  return (
    <>
      <Transition
        show={show}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-50 z-10"
          onClick={clicked}
          onKeyDown={clicked}
          role="button"
          tabIndex="0"
        ></div>
      </Transition>
      <div></div>
    </>
  );
};

export default Backdrop;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};
