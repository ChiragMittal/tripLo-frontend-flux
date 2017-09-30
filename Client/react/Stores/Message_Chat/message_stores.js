var AppDispatcher = require('../../Dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../../Constants/message_constants');
var MessageAPI = require('../../API/message_API');
var _ = require('underscore');

// Define initial data points
var _message = [];

// Add product to cart
function msgAdd(msg) {
  _message.push(msg);
}

// Remove item from cart
// function removeItem(img) {
//    _user.img = "";
// }



  // function loadMessage(message,target,token){
  //   MessageAPI.retrieveMessage(message,target,token);
  // }

  function receiveInitialMessages(data){
     _message=data
  }


// Extend Cart Store with EventEmitter to add eventing capabilities
var MessageStore = _.extend({}, EventEmitter.prototype, {
  // Return cart items
  getMessageInfo: function () {
    return _message;
   } ,

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

    case FluxCartConstants.RETRIEVE_MESSAGE:
      //loadMessage(action.username,action.target,action.token);
      break;

      case FluxCartConstants.RECIEVE_INITIAL_MESSAGE:
      receiveInitialMessages(action.msg);
      break;

      case FluxCartConstants.RECIEVE_MESSAGE:
      msgAdd(action.msg);
      break;

      case FluxCartConstants.SEND_MESSAGE:
      msgAdd(action.msg);
      break;

    //server dispatcher for check loggedIn and add/remove to/from favorite
    //functions to have = getUserLoggedIn(), addToFavorite(), removeFromFavorite()


    default:
      return true;
  }
  // If action was responded to, emit change event
  MessageStore.emitChange();
  return true;
});



module.exports = MessageStore;
