import React, { Component } from "react";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Navbar from "../../components/Navigation/Navbar/Navbar";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  toggleDrawerHandler = () => {
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));
  };
  closeDrawerHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };
  render() {
    return (
      <div className="h-screen">
        <Navbar
          historyClicked={this.toggleDrawerHandler}
          favoriteClicked={this.toggleDrawerHandler}
        />
        <SideDrawer
          show={this.state.showSideDrawer}
          closed={this.closeDrawerHandler}
        >
          SideDrawer
        </SideDrawer>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default Layout;
