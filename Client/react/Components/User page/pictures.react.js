var React = require('react');
var FluxCartActions = require('../User_Actions/user_actions');

import {Grid,Row,Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';


// Flux product view
var FluxPictures = React.createClass({

  // Add item to cart via Actions
  addPic: function (event) {
      // var name= this.props.product.name;
       var img= this.props.img; 

    FluxCartActions.addPhoto(img);
   // FluxCartActions.updateCartVisible(true);
  },

  delPic: function (event) {
      // var name= this.props.product.name;
       var img= this.props.img; 

    FluxCartActions.delPhoto(img);
   // FluxCartActions.updateCartVisible(true);
  },

  // Render product View
  render: function () {
    
    var imagePic = (this.props.img == null? 'default.png': this.props.img)
    return (
        <div id="flux-photo">
          <Image src={'../../public/img/'  + imagePic} thumbnail />
        </div>
    );
  }

});

module.exports = FluxPictures;