var React = require('react');
var FluxCartActions = require('../Actions/message_actions');


var ChatInput = React.createClass({
    getInitialState: function(){
      return { chatInput: '' };
    },

    submitHandler : function(event){

      event.preventDefault();
      var messageObject = {
        username: 'chirag',
        message: this.state.chatInput
      };
      
      FluxCartActions.sendMessage(messageObject);
      this.props.onSend(this.state.chatInput);
      this.setState({ chatInput: '' });
    },

    textChangeHandler : function(event){
    	 this.setState({ chatInput: event.target.value });
       //this.textChangeHandler = this.textChangeHandler.bind(this);
    },



    render : function(){
      //this.setState({ chatInput: '' });
    	return (
	      <form className="chat-input" onSubmit={this.submitHandler}>
          
	        <input type="text" onChange={this.textChangeHandler} placeholder="Write a message..."  value={this.state.chatInput}/>
	      </form>
	    );
    }

});

module.exports = ChatInput;
