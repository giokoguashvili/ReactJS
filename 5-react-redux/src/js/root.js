import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Layout from '../views/Layout'

class Root {
    init() {
        injectTapEventPlugin();
        return (props) => {
            return (
                <MuiThemeProvider>
                    <Layout>
                        {props.children}
                    </Layout>
                </MuiThemeProvider>
            );
        }
    }
}

export default Root