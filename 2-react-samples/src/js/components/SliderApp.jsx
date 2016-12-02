import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';

class SliderApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            r: 0,
            g: 0,
            b: 0
        }
        this.update = this.update.bind(this);
    }

    update(e){
        console.log(this.refs.red.refs.inp);
        console.log(ReactDOM.findDOMNode(this.refs.red.refs.inp));

        this.setState({
            r: this.refs.red.refs.inp.value,   
            g: this.refs.green.refs.inp.value, 
            b: this.refs.blue.refs.inp.value,  
        });
    }

    render() {
        return (
            <div>
                <Slider ref="red" handleState={this.update} lab="Red"/>
                <Slider ref="green" handleState={this.update} lab="Green"/>
                <Slider ref="blue" handleState={this.update} lab="Blue"/>
                <div>
                    <p>{this.state.r}</p>
                    <p>{this.state.g}</p>
                    <p>{this.state.b}</p> 
                </div>
            </div>
        );
    }
}

export default SliderApp