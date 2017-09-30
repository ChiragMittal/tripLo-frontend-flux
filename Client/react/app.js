var React = require('react');
var Render = require('react-dom').render;
var FluxCartApp = require('./Components/Destination Search/tripcartapp.react.js');



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
Render(
  <FluxCartApp />,
  document.getElementById('flux-cart')
);
