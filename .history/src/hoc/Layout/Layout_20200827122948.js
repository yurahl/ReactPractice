import React, {Component} from 'react';
import LayoutStyle from './Layout.css'

class Layout extends Component {
    render (){
        return (
            <div className={LayoutStyle.Layout}>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;
