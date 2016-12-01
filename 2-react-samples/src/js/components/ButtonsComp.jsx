import React, { Component } from 'react';


class ButtonsComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Buttons>
                <button value="1" type="">1</button>
                <button value="2" type="">2</button>
                <button value="3" type="">3</button>
                <button value="4" type="">4</button>
                <button value="5" type="">5</button>
            </Buttons>
        );
    }
}



class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBtnValue : ''
        };
    }

    select(value) {
        this.setState({selectedBtnValue : value});
    }

    render() {
        let items = this.props.children;
        var btns = React.Children.map(this.props.children, (node, index) => {
            var extendedNode = React.cloneElement(node, {
                onClick : this.select.bind(this, node.props.value)
            });
            return extendedNode;
        });
        console.log(items);
        return (
            <div>
                <h2>Selected btn is: {this.state.selectedBtnValue}</h2>
                {btns}
            </div>
        );
    }
}

export default ButtonsComp;