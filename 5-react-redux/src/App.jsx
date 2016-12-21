import React, { Component } from 'react'
import Layout from './Layout'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = (props) => (
        <MuiThemeProvider>
            <Layout>
                {props.children}
            </Layout>
        </MuiThemeProvider>
);

export default App;

            // <div>
            //     <input onChange={(e) => this.setState({ inputValue: e.target.value })} value={this.state.inputValue}/>
            //     <button onClick={() => { 
            //             store.dispatch({ type: ActionTypes.ADD_TODO, text: this.state.inputValue });
            //             this.setState({ inputValue: ''});
            //         }}
            //     >
            //         Add Todo
            //     </button>
            //     <ul>
            //         {this.props.todos.map((item) =>
            //                 <li 
            //                     key={item.id} 
            //                     style={{color: item.completed ? 'red' : 'blue' }}
            //                     onClick={() => {store.dispatch({type: ActionTypes.TOGGLE_TODO, todoId: item.id})}}
            //                 >
            //                     {item.text}
            //                     <button
            //                         onClick={() => { store.dispatch({ type: ActionTypes.REMOVE_TODO, todoId: item.id })}} 
            //                     >
            //                         X
            //                     </button>
            //                 </li>
            //             )}
            //     </ul>
            // </div>

