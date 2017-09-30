var React = require('react');
var io = require('socket.io-client');
var Multi_Message = require('./multi_message.react.js');
var ChatInput = require('./chat_input.react.js');
var MessageStore = require('../Stores/Message_Chat/message_stores');
var UserOnlineStore = require('../Stores/Message_Chat/users_online_stores');
var FluxCartActions = require('../Actions/message_actions');
var ServerActions = require('../Actions/server_actions');
var UsersList = require('./users.react.js');


function getMessageState() {
      return {
        messages: MessageStore.getMessageInfo(),
        list : UserOnlineStore.getListInfo(),
        username: 'chirag'
      };
}

        var socket=io('localhost:3000');
        // Listen for messages from the server
        socket.on('chat message', function(message) {
          ServerActions.recieveMessage(message);
        });

var ChatApp = React.createClass({

// addMessage : function(message) {


   sendHandler: function(message) {

   var messageObject = [] ;
   var users = [];

    messageObject = {
      username: this.state.username,
      message: message
    };



    // Emit the message to the server
    socket.emit('chat message', messageObject);
  },


  getInitialState: function () {
    FluxCartActions.retrieveMessage('chirag','chirag','chirag');
    FluxCartActions.recieveUsername('chirag');
    return getMessageState();
  },

  // Add change listeners to stores
  componentDidMount: function () {
    MessageStore.addChangeListener(this._onChange);
    UserOnlineStore.addChangeListener(this._onChange);
    
    socket.on('user:online',function(username){
        FluxCartActions.addName(username);
    });

    socket.on('user:offline',function(username){
        FluxCartActions.delName(username);
    });

  },

  // Remove change listeners from stores
  componentWillUnmount: function () {
    MessageStore.removeChangeListener(this._onChange);
    UserOnlineStore.removeChangeListener(this._onChange);
  },



  render : function() {

     return(

            <div className="container">
              <Multi_Message messages={this.state.messages} />
              <ChatInput onSend={this.sendHandler} />

               <UsersList users={this.state.list.users} />

            </div>

      );

  },

  _onChange: function () {
    this.setState(getMessageState());
  },


});

module.exports =  ChatApp;
