var React = require('react');
var FluxCartActions = require('../../Actions/fluxcartActions');

import { Button } from 'react-bootstrap';

// Flux cart view
var FluxCart = React.createClass({

  // Hide cart via Actions
  closeCart: function () {
    FluxCartActions.updateCartVisible(false);
  },

  // Show cart via Actions
  openCart: function () {
    FluxCartActions.updateCartVisible(true);
  },

  // Remove item from Cart via Actions
  removeFromCart: function (name) {
    FluxCartActions.removeFromCart(name);
    FluxCartActions.updateCartVisible(false);
  },

  // Render cart view
  render: function () {
    var self = this, products = this.props.products;
    return (
      <div className={"flux-cart " + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart">
          <button type="button" className="close-cart" onClick={this.closeCart}>&times;</button>
          <ul>
            {products.map(function (value, index) {
              return (
                <li key={index}>
                  <h1 className="name">{products[index].name}</h1>
                  <Button bsStyle="danger" bsSize="large" className="remove-item"
                    onClick={self.removeFromCart.bind(self, index)}>Remove
                  </Button>
                </li>
              );
            })}
          </ul>
          <span className="total">All Favourites</span>
        </div>
        <div className='aaa'>
          <Button bsStyle="info" bsSize="large" className="view-cart" onClick={this.openCart}
            disabled={Object.keys(this.props.products).length > 0 ? "" : "disabled"}>View
          ({this.props.count})
        </Button>
        </div>
      </div>
    );
  }

});

module.exports = FluxCart;