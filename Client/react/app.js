var React = require('react');
var Render = require('react-dom').render;
var FluxCartApp = require('./Components/User page/userapp.react.js');



var { Router, Route, IndexRoute, Link, hashHistory } = require('react-router');


var FluxUserApp = require('./Components/User page/userapp.react.js');
var FluxMultiPost = require('./Components/User page/Routing/multiPost.react.js');





/*var FluxCartApp=React.createClass({
      render: function() {
                return(
                        <div>
                            <h3>Hello World</h3>
                        </div>
                );
            }
});*/

// Render FluxCartApp Controller View

// var Post = React.createClass({
//     render: function () {
//         return (
//             <ul className="user-list">
//                 <li>Dan</li>
//                 <li>Ryan</li>
//                 <li>Michael</li>
//             </ul>
//         )
//     }
// });

var Favourites = React.createClass({
    render: function () {
        return (
            <ul className="widget-list">
                <li>Widget 1</li>
                <li>Widget 2</li>
                <li>Widget 3</li>
            </ul>
        )
    }
});


Render(
    <Router history={hashHistory}>
        <Route path="/user" component={FluxUserApp}>
            <IndexRoute component={FluxMultiPost} />
            <Route >
                <Route path="favourites" component={Favourites} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('flux-cart')
);
