import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends Component {
    constructor(){
        super();
        this.state = { name : "Gio"};
    }
    render(){
        setTimeout(() => {
            this.setState({ name: "Gio - " + Math.random() })
        }, 1000);
        return (
            <div>
                <Header title={this.state.name}/>
                <Footer/>
            </div>
        );
    }
};