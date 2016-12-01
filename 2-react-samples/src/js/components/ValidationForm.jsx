import React, { Component } from 'react';

class ValidationForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <label>
                    {this.props.labelName}:
                    <input type="text"/>
                </label>
            </form>
        );
    }
}

ValidationForm.propTypes = {
    labelName(props, propName, component) {
        if (!(propName in props))
            return new Error('${propName} is requred');

        if (props[propName].length < 6) {
            return new Error("Length!");
        }     
        
    }
};

export default ValidationForm