var React = require('react');
var Message = require('./message.react.js');


var Multi_Message = React.createClass({


     componentDidUpdate : function(){
     	var objDiv = document.getElementById('messageList');
    	objDiv.scrollTop = objDiv.scrollHeight;
     },

     render : function(){

              var messages = (this.props.messages).map(function(message,i){

                   return(
                      <Message
			            key={i}
			            username={message.username}
			            message={message.message} />
                   	);

              });

               return (
			      <div className='messages' id='messageList'>
			        { messages }
			      </div>
			    );

     }

});

module.exports = Multi_Message;
