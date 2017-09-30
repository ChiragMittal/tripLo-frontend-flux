var AppDispatcher = require('../Dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../Constants/FluxCartConstants');
var _ = require('underscore');

// Define initial data points
var _favourites = [];

  function loadfavoutitess(_favourite){
     _favourites=_favourite;
  }


// Extend Cart Store with EventEmitter to add eventing capabilities
var FavouritesStore = _.extend({}, EventEmitter.prototype, {
  // Return cart items
  getFavourites: function () {
    return _favourites;
  }
  // Return # of items in cart
  // getCartCount: function () {
  //   return Object.keys(_products).length;
  // },
  // Return cart visibility state
  // getCartVisible: function () {
  //   return _cartVisible;
  // },
  // Emit Change event
  emitChange: function () {
    this.emit('change');
  },
  // Add change listener
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  // Remove change listener
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }
});

// Register callback with AppDispatcher
AppDispatcher.register(function (payload) {
  var action = payload.action;
  var text;
  switch (action.actionType) {
    // Respond to CART_ADD action
    // case FluxCartConstants.ADD_PHOTO:
    //   picAdd(action.img);
    //   break;
    // // Respond to CART_VISIBLE action
    // // case FluxCartConstants.CART_VISIBLE:
    // //   setCartVisible(action.cartVisible);
    // //   break;
    // // Respond to CART_REMOVE action
    // case FluxCartConstants.DEL_PHOTO:
    //   removeItem(action.img);
    //   break;

    // case FluxCartConstants.EDIT_INFO:
    //   editInfo(action.fname,action.lname,action.dob,action.info);
    //   break;

    //server dispatcher for check loggedIn and add/remove to/from favorite
    //functions to have = getUserLoggedIn(), addToFavorite(), removeFromFavorite()

    
    default:
      return true;
  }
  // If action was responded to, emit change event
  FavouritesStore.emitChange();
  return true;
});



module.exports = FavouritesStore;
