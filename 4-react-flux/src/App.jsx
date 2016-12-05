import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

const propTypes = {
}

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <RaisedButton label="Default" />
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