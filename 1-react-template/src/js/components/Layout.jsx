import React, { Component } from "react";

export default class Layout extends Component {
    constructor(){
        super();
        this.title = "Welcome to React world";
    }

    getTitle() {
        return this.title;
    }

    render(){
        return (
            <div>
                <h1>{this.getTitle()}</h1>
            </div>
        );
    }
};