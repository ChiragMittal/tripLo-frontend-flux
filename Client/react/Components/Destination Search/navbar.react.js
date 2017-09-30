var React = require('react'); 
var NavBarLink =  require('./navbarlink.react.js');
var NavBar = require('./nav.react.js')

var NavBarItem = React.createClass({
  generateLink: function(){
    return <NavBarLink url={this.props.url} text={this.props.text} hello={this.props.hello}/>;
  },
 
  generateContent: function(){
    var content = [this.generateLink()];
    
    return content;
  },
  render: function() {
    var content = this.generateContent();
    return (
      <li className={this.props.hello}>
        {content}
      </li>
    );
  }
});

module.exports = NavBarItem;

