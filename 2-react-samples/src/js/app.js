import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import ValidationForm from './components/ValidationForm';

ReactDOM.render(<Layout/>, document.getElementById("app"));

//ReactDOM.render(<Layout/>, document.getElementById("app1"));

ReactDOM.render(<ValidationForm labelName="Name - 123"/>, document.getElementById("app2"));