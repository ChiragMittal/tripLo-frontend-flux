var AppDispatcher = require('../Dispatcher/appDispatcher');
var FluxCartConstants = require('../Constants/fluxcartConstants');

// Define action methods
var FluxCartActions = {

  receiveProduct: function (data) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVE_DATA,
      data: data
    })
  },

  // Set currently selected product variation
  selectProduct: function (index) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.SELECT_PRODUCT,
      data: index
    })
  },

  // Add item to cart
  addToCart: function (id, name) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_ADD,
      id: id,
      name: name

    })
  },

  // Remove item from cart
  removeFromCart: function (name) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_REMOVE,
      name: name
    })
  },

  // Update cart visibility status
  updateCartVisible: function (cartVisible) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_VISIBLE,
      cartVisible: cartVisible
    })
  },

  fetch: function (query) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_FETCH,
      query: query
    })
  },

  hotsearch: function (query) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.DESTINATIONHOT_SEARCH,
      query: query
    })
  },

  hotsearch_fetch: function (data) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.DESTINATIONHOT_SEARCHFETCH,
      data: data
    })
  },

  receiveMap: function (data) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVEMAP_DATA,
      data: data
    })
  },

  receiveProduct: function (data) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVEPRODUCT_DATA,
      data: data
    })
  }

  //add new actions to checkLoggedIn(), logout()

};

module.exports = FluxCartActions;
