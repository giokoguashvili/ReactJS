import React, { Component, PropTypes } from 'react'
import Todos from '../../modules/Todos'

class Tasks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Todos
                    filter={this.props.params.filter || 'all' } 
                />
            </div>
        );
    }
}

export default Tasks;