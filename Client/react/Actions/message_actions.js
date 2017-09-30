var AppDispatcher = require('../Dispatcher/appDispatcher');
var FluxCartConstants = require('../Constants/message_constants');
var MessageAPI = require('../API/message_API');


// Define action methods
var FluxCartActions = {

  sendMessage: function (msg) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.SEND_MESSAGE,
      msg : msg
    })
  },

  retrieveMessage: function (msg,target,token) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RETRIEVE_MESSAGE,
      msg : msg ,
      target : target ,
      token : token
    });
    MessageAPI.retrieveMessage(msg,target,token);
  },

  showList :function(username) {
    AppDispatcher.handleAction({
         actionType : FluxCartConstants.SHOW_LIST,
         username : username,
         
    });
  },

  addName :function(username) {
    AppDispatcher.handleAction({
         actionType : FluxCartConstants.ADD_NAME,
         username : username,
         
    });
  },

  delName :function(username) {
    AppDispatcher.handleAction({
         actionType : FluxCartConstants.DELETE_NAME,
         username : username,
         
    });
  }, 

  recieveUsername: function (username) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECIEVE_USERNAME,
      username : username ,
      
    });
    
  },


};

module.exports = FluxCartActions;
