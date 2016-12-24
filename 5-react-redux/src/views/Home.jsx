import React, { Component, PropTypes } from 'react'
import Todos from '../todos'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Todos />
            </div>
        );
    }
}

export default Home;