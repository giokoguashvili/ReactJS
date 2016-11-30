import React, { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = { currentTime : new Date() }
    }

    componentDidMount(){
        this.timerId = setInterval(() => {
            this.setState({currentTime : new Date()});
        }, 1000);
    }

    componentWillunmount()
    {
        clearInterval(this.timerId);
    }

    render() {
       return (
           <div>
                It's {this.state.currentTime.toLocaleTimeString()}
            </div>
       );
    }
}