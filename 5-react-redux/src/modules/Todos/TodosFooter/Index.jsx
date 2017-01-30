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
                    <FilterLink filter="/Tasks/all">
                        All
                    </FilterLink>
                    <FilterLink filter="/Tasks/active">
                        Active
                    </FilterLink>
                    <FilterLink filter="/Tasks/completed">
                        Completed
                    </FilterLink>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default TodosFooter;