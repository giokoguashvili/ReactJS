
import React, { Component, PropTypes } from 'react';

const propTypes = {
}

class Repos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Repos
                <hr/>
                {this.props.params.userName} - {this.props.params.repoName}
            </div>
        );
    }
}

Repos.propTypes = propTypes;

export default Repos;