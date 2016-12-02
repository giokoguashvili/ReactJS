import React, { Component } from 'react';

class ProductCategoryRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="2">
                                    {this.props.value.name}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </td>
            </tr>
        );
    }
}

export default ProductCategoryRow;