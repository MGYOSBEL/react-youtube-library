import React from "react";
import IconButton from "../../UI/Buttons/IconButton/IconButton";
import Logo from '../../Logo/Logo';

const navbar = (props) => {
  return (
    <>
      <header className="justify-between flex sticky bg-gray-800 text-white p-2 top-0 left-0 w-screen">
          <Logo />
        <nav className="h-100">
          <IconButton icons={["fas", "history"]} clicked={props.historyClicked}/>
          <IconButton icons={["far", "heart"]} clicked={props.favoriteClicked}/>
        </nav>
      </header>
    </>
  );
};

export default navbar;
