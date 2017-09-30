var React = require('react');


var UsersList = React.createClass({

  render : function() {

    var multiUser = this.props.users;

      return (
          <div className='users'>
              <ul>
                  {multiUser.map(function(username, i){
                          return (
                              <li key={i}> {this.props.username}</li>
                          );
                      })}
              </ul>                
          </div>
      );
  }
});

module.exports = UsersList ;