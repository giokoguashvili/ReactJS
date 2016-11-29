import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends Component {
    constructor(){
        super();
        this.count = 0;
        this.state = { name : "gio", count : 1 };
    }
    render(){
        this.count += 1;
        setTimeout(() => {
             this.count += 2;
           // this.setState({ name : "gio", count : 1 });
            console.log(this.count);
        }, 1000);
        return (
            <div>
                <Header/>
                <div>
                    {this.state.name} 
                </div>
                {this.count} 
                <Footer/>
            </div>
        );
    }
};