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
    }

    render() {
        let productsCategories = [
                {
                    name : 'Sport A',
                    products : [
                        { name : 'A', price : 15 },
                        { name : 'A', price : 20 }
                    ]  
                },
                {
                    name : "Sport B",
                    products : [
                        { name : 'B', price : 35 },
                        { name : 'B', price : 45 }
                    ]  
                }
            ];
        return (
            <div style={{backgroundColor: 'silver'}}>
                <SearchBar />
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