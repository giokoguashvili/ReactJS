import React, { Component } from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 0
        }
        this.update = this.update.bind(this);
    }

    update(e){
        this.setState({ value : e.target.value });
        this.props.handleState(e);
    }

    render() {
        return (
            <div>
                <input 
                    ref="inp"
                    type="range" 
                    min="0"
                    max="255"
                    step="0.1"
                    value={this.state.value} 
                    onChange={this.update}
                />
                <Label val={this.state.value} lab={this.props.lab}/>
            </div>
        );
    }
}

const Label = (props) => <label>{props.lab} - {props.val}</label>

export default Slider;