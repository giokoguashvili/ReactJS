// FilterableProductTable (orange): contains the entirety of the example
// SearchBar (blue): receives all user input
// ProductTable (green): displays and filters the data collection based on user input
// ProductCategoryRow (turquoise): displays a heading for each category
// ProductRow (red): displays a row for each product

import React, { Component } from 'react';
import ProductRow from './ProductRow';
import ProductTable from './ProductTable';
import ProductCategoryRow from './ProductCategoryRow';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = { filteredText : '' };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        console.log(this.state.filteredText);
        this.setState({ filteredText : e.target.value });
    }

    render() {
        
        let productsCategories = this.props
            .productsCategories
            .map((item) => {
                let products = item.products.filter((prod) => this.state.filteredText === '' || prod.name.indexOf(this.state.filteredText) !== -1);
                return {
                    name : item.name,
                    products : products 
                };
            })
            .filter((item) => item.products.length !== 0);

            console.log(productsCategories);
        return (
            <div style={{backgroundColor: 'silver'}}>
                <SearchBar onUserInpunt={this.handleUserInput}/>
                <ProductTable>
                    {productsCategories.map((productCategory, index) => 
                        <ProductCategoryRow value={productCategory} key={index}>
                            {productCategory.products.map((product, index2) =>
                                <ProductRow value={product} key={index2}/>
                            )}
                        </ProductCategoryRow>
                    )}
                </ProductTable>                 
            </div>
        );
    }
}

export default FilterableProductTable;