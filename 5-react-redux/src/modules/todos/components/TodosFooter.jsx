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
                    <FilterLink filter="SHOW_ALL">
                        All
                    </FilterLink>
                    <FilterLink filter="SHOW_ACTIVE">
                        Active
                    </FilterLink>
                    <FilterLink filter="SHOW_COMPLETED">
                        Completed
                    </FilterLink>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default TodosFooter;