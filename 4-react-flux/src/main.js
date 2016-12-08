
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import App from './App';
import About from './About';
import Repos from './Repos';
import Other from './Other';
import Home from './Home';
import Layout from './Layout';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// ReactDOM.render(
//     <Router history={browserHistory}>
//         <Route path="/" component={App}>
//             <IndexRoute component={Home} />
//             <Route path="/About" component={About}/>
//             <Route path="/Repos" component={Repos}>
//                 <Route path="/Repos/:userName/:repoName" component={Repos}/>
//             </Route>
//             <Route path="/Other/:repoName/:userName" component={Other}/>
//         </Route>
//     </Router>,
//     document.getElementById("app")
// );
ReactDOM.render(
    <Layout/>,
    document.getElementById("app")
);
