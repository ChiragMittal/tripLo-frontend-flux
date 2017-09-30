var React = require('react');
var FluxCartActions = require('../../Actions/fluxcartActions');

import { Button } from 'react-bootstrap';

// Flux product view
var FluxProduct = React.createClass({

  // Add item to cart via Actions
  addToCart: function (event) {
    var name = this.props.product.name;
    var id = this.props.product.id;

    FluxCartActions.addToCart(id, name);
    FluxCartActions.updateCartVisible(true);
  },

  // Select product variation via Actions
  /* selectVariant: function (event) {
     FluxCartActions.selectProduct(event.target.value);
   },*/

  // Render product View
  render: function () {

    var imagePic = (this.props.product.image == null ? 'default.png' : this.props.product.image)
    return (
      <div className="flux-trip">



        <div className="flux-product-detail">
          <h1 className="name">{this.props.product.name}</h1>
          <img src={'public/img/' + imagePic} />
          <p className="description">{this.props.product.description}</p>

          <Button bsStyle="success" bsSize="large" onClick={this.addToCart} >
            Add
          </Button>
        </div>
      </div>
    );
  }

});

module.exports = FluxProduct;