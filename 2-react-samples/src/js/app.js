import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import ValidationForm from './components/ValidationForm';
import Wrapper from './components/Wrapper';
import Buttons from './components/ButtonsComp';
import SliderApp from './components/SliderApp';

import AddDialog from './components/AddDialog';
import CancelableDialog from './components/CancelableDialog';
import FilterableProductTable from './components/FilterableProductTableComponent/FilterableProductTable';

ReactDOM.render(<Layout/>, document.getElementById("app"));

//ReactDOM.render(<Layout/>, document.getElementById("app1"));

ReactDOM.render(<ValidationForm labelName="Name - 123"/>, document.getElementById("app2"));

ReactDOM.render(<Wrapper/>, document.getElementById("app3"));

ReactDOM.render(<Buttons/>, document.getElementById("app4"));

ReactDOM.render(<SliderApp/>, document.getElementById("app5"));

ReactDOM.render(<AddDialog/>, document.getElementById("app6"));

ReactDOM.render(<CancelableDialog/>, document.getElementById("app7"));
 
let products = [
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
        },
        {
            name : "Sport C",
            products : [
                { name : 'C', price : 35 },
                { name : 'C', price : 45 },
                { name : 'C', price : 45 }
            ]  
        }
    ];
ReactDOM.render(
    <FilterableProductTable productsCategories={products}/>, 
    document.getElementById("container"));
