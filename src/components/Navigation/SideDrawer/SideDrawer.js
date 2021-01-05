import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../../UI/Backdrop/Backdrop';

const closedClasses = 'transform -translate-x-full transition ease-in duration-400';
const openedClasses = 'transform translate-x-0 transition ease-in duration-400';
const generalClasses =
  'w-3/5 md:w-1/3 h-screen absolute top-0 bg-gray-700 text-white font-semibold content-center text-center z-20';

const SideDrawer = (props) => (
  <>
    <Backdrop show={props.show} clicked={props.closed} />
    <div className={[generalClasses, props.show ? openedClasses : closedClasses].join(' ')}>{props.children}</div>
  </>
);

export default SideDrawer;

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired,
  children: PropTypes.node,
};
