import React, { Component } from 'react';

class ProductRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <tr>
                <td>
                    {this.props.value.name}
                </td>
                <td>
                    {this.props.value.price}
                </td>
            </tr>
        );
    }
}

export default ProductRow;
