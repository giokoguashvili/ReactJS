import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        console.log(e.target.value);
        this.props.onUserInpunt(e);
    }

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    onChange={this.handleInputChange}
                    />
            </form>
        );
    }
}

export default SearchBar;