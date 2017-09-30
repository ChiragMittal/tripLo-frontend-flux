var AppDispatcher = require('../Dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../Constants/user_constants');
var UserAPI = require('../API/user_API');
var _ = require('underscore');

// Define initial data points
var _user = {};


/*
_user = {
  usename: ,
  picpath: ,
  fname: ,
  lname: ,
  picpath: ,
  followingcount: ,
  followercount
}
*/


// Add product to cart
function picAdd(img) {
  _user.push({img:img});
}

// Set cart visibility
// function setCartVisible(cartVisible) {
//   _cartVisible = cartVisible;
// }

// Remove item from cart
function removeItem(img) {
   _user.img = "";
}

  function editInfo(fname,lname,dob,info){
    _user.fname=fname;
    _user.lname=lname;
    _user.dob=dob;
    _user.info=info;
  }

  function loadInfo(username,target,token){
    UserAPI.retrieveInfo(username,target,token);
  }

  function recieveInfo(data){
     _user={
         username: data.username,
         picpath: data.picpath,
         fname : data.fname,
         lname : data.lname,
         dob : data.dob,
         info : data.info,
         follow_count : data.follow_count,
         following_count : data.following_count,
         favourites_count : data.favourites_count,
         destination_categories : data.destination_categories
     }
  }


// Extend Cart Store with EventEmitter to add eventing capabilities
var PicInfoStore = _.extend({}, EventEmitter.prototype, {
  // Return cart items
  getUserInfo: function () {
    loadInfo("chirag","chirag","schirag");
    return _user;
  },
  // getUsername: function () {
  //   return _user.username;
  // },
  // getFname: function () {
  //   return _user.fname;
  // },
  // getLname: function () {
  //   return _user.lname;
  // },
  // getUserInfo: function () {
  //   return _user.;
  // },
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

    case FluxCartConstants.RETRIEVE_INFO:
      loadInfo(action.username,action.target,action.token);
      break;

      case FluxCartConstants.RECIEVE_INFO:
      recieveInfo(action.data);
      break;

    //server dispatcher for check loggedIn and add/remove to/from favorite
    //functions to have = getUserLoggedIn(), addToFavorite(), removeFromFavorite()

    
    default:
      return true;
  }
  // If action was responded to, emit change event
  PicInfoStore.emitChange();
  return true;
});



module.exports = PicInfoStore;
