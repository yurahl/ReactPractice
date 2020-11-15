import React, { Component } from "react";
import LayoutStyle from "./Layout.css";
import MenuToggle from '../../components/Navigation/MenuToggle'

class Layout extends Component {
  render() {
    return (
      <div className={LayoutStyle.Layout}>
        <MenuToggle
          onToggle{this.toggleMenuHandler}
        />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
