var AppDispatcher = require('../Dispatcher/appDispatcher');
var FluxCartConstants = require('../Constants/message_constants');

module.exports = {
  recieveInitialMessage: function (msg) {
      AppDispatcher.handleServerAction({
        actionType: FluxCartConstants.RECIEVE_INITIAL_MESSAGE,
        msg : msg
      })
    },

    recieveMessage: function (msg) {
        AppDispatcher.handleServerAction({
          actionType: FluxCartConstants.RECIEVE_MESSAGE,
          msg : msg
        })
      },
}
