import React, { Component, PropTypes } from 'react';
import FilterLink from './FilterLink'
import { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator } from 'material-ui/Toolbar'

class TodosFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="Show" />
                    <ToolbarSeparator />
                    <FilterLink filter="/home/all">
                        All
                    </FilterLink>
                    <FilterLink filter="/home/active">
                        Active
                    </FilterLink>
                    <FilterLink filter="/home/completed">
                        Completed
                    </FilterLink>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default TodosFooter;