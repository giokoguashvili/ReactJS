import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

injectTapEventPlugin();

const propTypes = {
}

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="kogoia">

                <MuiThemeProvider>
                    <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                </MuiThemeProvider>
                 <MuiThemeProvider>
                    <RaisedButton label="Default" />
                </MuiThemeProvider>            
            </div>

        );
    }
}

App.propTypes = propTypes;

export default App;