var React = require('react');
var FluxCartActions = require('../User_Actions/user_actions');

import {Grid,Row,Col} from 'react-bootstrap';


// Flux product view
var FluxCount = React.createClass({

  // Render product View
  render: function () {
    
    //var imagePic = (this.props.user.image == null? 'default.png': this.props.user.image)
    return (
      <div className="flux-count">
                  <Col md={4}>
                    <h2 className="follow">FOLLOWERS</h2>
                    <p>{this.props.follow_count}</p>
                  </Col>
                  <Col md={4}>
                    <h2 className="following">FOLLOWING</h2>
                    <p>{this.props.following_count}</p>
                  </Col>
                  <Col md={4}>
                    <h2 className="favourites">FAVOURITES</h2>
                    <p>{this.props.favourites_count}</p>
                  </Col>

      </div>
    );
  }

});

module.exports = FluxCount;