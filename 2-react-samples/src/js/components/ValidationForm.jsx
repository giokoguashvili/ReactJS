import React, { Component } from 'react';

class ValidationForm extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.state = {
            input1 : '',
            input2 : ''
        };
        console.log("Validation Form Constructor");
    }

    update(e) {
        console.log(this.refs);
        this.setState({
            input1 : this.refs.a.value,
            input2 : this.refs.b.value
        })
    }

    render() {
        return (
            <form>
                <label>
                    {this.props.labelName}:
                    <input type="text"/>
                </label>
                <br/>
                <input ref="a" id="1" type="text" onChange={this.update} /> {this.state.input1}
                <br/>
                <input ref="b" id="2" type="text" onChange={this.update} /> {this.state.input2}
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