var React = require('react');

var Message = React.createClass({

     

      render : function() {
      	return(
               <div className='message-body'>
			        <div className='username'>
			          { this.props.username }
			        </div>
			        <div className='message'>
			          { this.props.message }
			        </div>
			    </div>
      		);
      }

});

module.exports = Message;
