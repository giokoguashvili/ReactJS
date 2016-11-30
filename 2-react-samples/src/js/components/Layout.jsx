import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Clock from "./Clock";

export default class Layout extends Component {
    constructor(props){
        super(props);
        this.state = { title : "Welcome!"};
    }

    changeTitle(title) {
        this.setState({title});    
    }

    render(){
        return (
            <div className="jora">
                <Clock />
                <Header 
                    changeTitle={this.changeTitle.bind(this)} 
                    title={this.state.title + Math.random()}
                />
                <Footer/>
            </div>
        );
    }
};