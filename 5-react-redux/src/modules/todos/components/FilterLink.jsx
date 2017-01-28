import React, { Component, PropTypes } from 'react';
import filterLinkContainer from '../containers/filterLinkContainer'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'

const FilterLink = ({ filter, children }) => (
    <Link
        to={filter}
        activeStyle={{
            textDecoration: 'none',
            color: 'black',
        }}
        >
        {children}
    </Link>
);

export default FilterLink;
