import React, { Component } from "react";
import LayoutStyle from "./Layout.css";
import MenuToggle from '../../components/Navigation/MenuToggle'

class Layout extends Component {
  state = {
   menu: false 
  }

  toggleMenuHandler = ()=>{
    this.setState({
      menu: !this.state.menu
    }
    )
  }
  render() {
    return (
      <div className={LayoutStyle.Layout}>
        <MenuToggle
          onToggle={this.toggleMenuHandler}
        />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
