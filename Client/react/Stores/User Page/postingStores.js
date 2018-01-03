var AppDispatcher = require('../../Dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../../Constants/user_constants');
var UserAPI = require('../../API/user_API');
var _ = require('underscore');

// Define initial data points
var _posts = [];


function loadPost(username, target, token, start) {
  UserAPI.retrievePost(username, target, token, start);
}

function recieveInfo(data) {
  _posts = data;
}


// Extend Cart Store with EventEmitter to add eventing capabilities
var PostsStore = _.extend({}, EventEmitter.prototype, {
  getpost: function () {
    loadPost("chirag", "chirag", "chi", 10);
    return _posts;
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
    // Respond to CART_ADD action
    case FluxCartConstants.RETRIEVE_POST:
      loadInfo(action.username, action.target, action.token, action.start);
      break;

    case FluxCartConstants.LOAD_POST:
      recieveInfo(action.data);
      break;

    //server dispatcher for check loggedIn and add/remove to/from favorite
    //functions to have = getUserLoggedIn(), addToFavorite(), removeFromFavorite()


    default:
      return true;
  }
  // If action was responded to, emit change event
  PostsStore.emitChange();
  return true;
});



module.exports = PostsStore;
