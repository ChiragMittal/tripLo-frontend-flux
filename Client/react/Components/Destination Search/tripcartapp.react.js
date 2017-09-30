var React = require('react');
var CartStore = require('../../Stores/Destination Search/cartStore');
var ProductStore = require('../../Stores/Destination Search/tripStore');
var MapStore = require('../../Stores/Destination Search/mapStore');
var FluxProduct = require('./trip.react.js');
var FluxCart = require('./tripcart.react.js');
var NavBar = require('./nav.react.js');
var data = require('../../data')
//var Container=require('./container.react.js');
import Container from './container.react.js';

//import NpsForecastMap from './container.react.js';


// Method to retrieve state from Stores
function getCartState() {
  return {
    product: ProductStore.getProduct(),
    selectedProduct: ProductStore.getSelected(),
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    // cartTotal: CartStore.getCartTotal(),
    cartVisible: CartStore.getCartVisible(),
    //,user: CartStore.getUserLoggedIn()            -> server request for logged in user data
    mapMarkers: MapStore.getMarkers(),
    mapCentre: MapStore.getCentre()
  };
}

// Define main Controller View
var FluxCartApp = React.createClass({

  // Get initial state from stores
  getInitialState: function () {
    return getCartState();
  },

  // Add change listeners to stores
  componentDidMount: function () {
    ProductStore.addChangeListener(this._onChange);
    CartStore.addChangeListener(this._onChange);
    MapStore.addChangeListener(this._onChange);
  },

  // Remove change listeners from stores
  componentWillUnmount: function () {
    ProductStore.removeChangeListener(this._onChange);
    CartStore.removeChangeListener(this._onChange);
    MapStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function () {
    return (
      <div className="flux-cart-app">
        <NavBar items={data} />
        <Container google={window.google} markers={this.state.mapMarkers} initialCenter={this.state.mapCentre} />

        <FluxCart products={this.state.cartItems} count={this.state.cartCount} visible={this.state.cartVisible} />

        {(this.state.product).map(function (value, index) {
          return (
            <FluxProduct product={value} />
          )
        })}

      </div>

    );
  },

  // Method to setState based upon Store changes
  _onChange: function () {
    this.setState(getCartState());
  }

});

module.exports = FluxCartApp;
