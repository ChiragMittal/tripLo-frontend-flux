var React = require('react'); 
//var NavBarItem = require('./navbar.react.js');
//var MaterialUIAutocomplete =require('./sarch.react.js');
import App from './search.react.js';
//import {MaterialUIAutocomplete} from './sarch.react.js';

var NavBar = React.createClass({
 /* generateItem: function(item){
    return <NavBarItem text={item.text} url={item.url} hello={item.hello} />
  },*/
  render: function() {
    //var items = this.props.items.map(this.generateItem);
    return (
          <ul class="menu">
      <li class="logo" id="logo">
        <a href="homepage.html"><img src="../img/logo-white.png" /></a>
      </li>
      <li class="search">
          
          <App placeHolder={"where to plan"} />
      </li>
      <li class="hello">
        <a href="../login.html">Sign In</a>
      </li>
      <li class="hello">  
        <a href="../signup.html">Sign Up</a>
      </li>
    </ul>
    );
  }
});

module.exports = NavBar;