import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

export default class RoutedApp {
    constructor(components) {
        this._components = components;
    }

    create() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={this._components.App}>
                </Route>
            </Router>
        );
    }
}

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