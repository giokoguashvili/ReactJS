import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ValidationForm from './ValidationForm';

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.mount = this.mount.bind(this);
        this.unmount = this.unmount.bind(this);
    }

    mount() {
        ReactDOM.render(<ValidationForm labelName="Mount"/>, document.getElementById('forMount'));
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('forMount'))
    }

    render() {
        return (
            <div>
                <button onClick={this.mount}>Mount</button>
                <button onClick={this.unmount}>UnMount</button>
                <div id="forMount"></div>
            </div>
        );
    }
}

export default Wrapper;