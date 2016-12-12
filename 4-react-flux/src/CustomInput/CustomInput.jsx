
import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const propTypes = {
}

class CustomInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue: '',
            addBtnIsDisabled: true  
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddBtnClick = this.handleAddBtnClick.bind(this);
        this.handleEnterKeyDownOnTextField = this.handleEnterKeyDownOnTextField.bind(this);
    }

    handleInputChange(e){
        let inputValue = e.target.value;
        this.setState({ 
            inputValue: e.target.value,
            addBtnIsDisabled: inputValue.length === 0
        });
    }

    handleAddBtnClick() {
        this.props.onAddBtnClick(this.state.inputValue);
        this.setState({ 
            inputValue: '',
            addBtnIsDisabled: true
        });
    }

    handleEnterKeyDownOnTextField(e) {
        if (e.keyCode === 13) {
            this.handleAddBtnClick();
        }
    }

    render() {
        const style = {
            margin: 15,
        };
        return (
            <div>
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Todo title"
                    onChange={this.handleInputChange}
                    value={this.state.inputValue}
                    onKeyDown={this.handleEnterKeyDownOnTextField}
                />
                <RaisedButton 
                    label="Add" 
                    primary={true} 
                    style={style}
                    onClick={this.handleAddBtnClick}
                    disabled={this.state.addBtnIsDisabled}
                />
            </div>
        );
    }
}

CustomInput.propTypes = propTypes;

export default CustomInput;