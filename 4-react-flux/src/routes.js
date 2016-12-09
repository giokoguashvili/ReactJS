import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import App from './App'; 
import Welcome from './Welcome';
import Home from './Home';

const routes = (
    <Route path="/react-samples" component={App}>
        <IndexRoute component={Welcome}/>
        <Route path="/react-samples/Welcome" component={Welcome}/>
        <Route path="/react-samples/Home" component={Home}/>
    </Route>
);

export default routes;

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