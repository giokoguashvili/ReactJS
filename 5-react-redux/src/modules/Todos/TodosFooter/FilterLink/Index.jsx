import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'

import container from './container'

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

export default container(FilterLink);
