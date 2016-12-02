import React, { Component } from 'react';

class ProductTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("ProcutTable")
        console.log(this.props)
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;