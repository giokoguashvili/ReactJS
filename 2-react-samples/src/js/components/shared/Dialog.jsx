import React, { Component } from 'react';

class Dialog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>
                    {this.props.children}
                </div>
                <div>
                    {this.props.dialogButtons}
                </div>
            </div>
        );
    }
}

export default Dialog