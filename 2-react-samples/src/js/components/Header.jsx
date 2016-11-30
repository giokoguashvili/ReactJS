import React, { Component } from "react";
import Title from "./Title";

export default class Header extends Component {
    
    constructor(props) {
        super(props);
        this.rand = Math.random();
    }

    handleChange(e) {
        this.props.changeTitle(e.target.value);
    }

    render() {
        return (
            <header>
                <Title title={this.props.title} />
                <input onChange={this.handleChange.bind(this)}/>
                {this.rand}
            </header>
        );
    }
}
