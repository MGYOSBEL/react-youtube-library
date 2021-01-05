import React, {Component} from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    toggleDrawerHandler = () => {
        this.setState((prevState) => ({
            showSideDrawer: !prevState.showSideDrawer
        }));
    }
    closeDrawerHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }
    render() {
        return (
            <>
            <button className="absolute right-0.5" onClick={this.toggleDrawerHandler}>Toggle SideDrawer</button>
            <SideDrawer show={this.state.showSideDrawer} closed={this.closeDrawerHandler}> SideDrawer </SideDrawer>
                <h1>Hello World!</h1>
            </>
        );
    }
}

export default Layout;