var AppDispatcher = require('../../Dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../../Constants/message_constants');
var MessageAPI = require('../../API/message_API');
var _ = require('underscore');

// Define initial data points
var _users = [];

// Add product to cart
function userOnline(username) {
  _users.push(username);
}

 function userOffline(username) {
   var index = _users.indexOf(username);
   _users.splice(index,1);
 }

  

  function receiveList(data){
     _users=data
  }


// Extend Cart Store with EventEmitter to add eventing capabilities
var UserOnlineStore = _.extend({}, EventEmitter.prototype, {
  // Return cart items
  getListInfo: function () {
    return _users;
   },

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
    case FluxCartConstants.SHOW_LIST:
      recieveList(action.data);
      break;

      case FluxCartConstants.ADD_NAME:
      userOnline(action.username);
      break;

      case FluxCartConstants.DELETE_NAME:
      userOffline(action.username);
      break;

    //server dispatcher for check loggedIn and add/remove to/from favorite
    //functions to have = getUserLoggedIn(), addToFavorite(), removeFromFavorite()


    default:
      return true;
  }
  // If action was responded to, emit change event
  UserOnlineStore.emitChange();
  return true;
});



module.exports = UserOnlineStore;
