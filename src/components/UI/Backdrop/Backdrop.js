import React from "react";

const backdrop = (props) =>
  props.show ? (
    <div
      className="fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-50 z-10"
      onClick={props.clicked}
    ></div>
  ) : null;

export default backdrop;
