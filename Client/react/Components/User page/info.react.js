var React = require('react');
var FluxCartActions = require('../../Actions/user_actions');


import { Grid, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';


// Flux product view
var FluxInfo = React.createClass({

  // Add item to cart via Actions
  editInfo: function (event) {
    // var name= this.props.product.name;
    //var username= this.props.username;
    var fname = this.props.fname;
    var lname = this.props.lname;
    var dob = this.props.dob;
    var info = this.props.info;

    FluxCartActions.editInfo(fname, lname, dob, info);
    // FluxCartActions.updateCartVisible(true);
  },


  // Render product View
  render: function () {

    //var imagePic = (this.props.user.image == null? 'default.png': this.props.user.image)
    return (
      <div className="flux-info">

        <h1 className="name">{this.props.fname} {this.props.lname}</h1>
        <h3 className="username">{this.props.username} </h3>
        <h3 className="dob">{this.props.dob}</h3>
        <h3 className="info">{this.props.info}</h3>



      </div>
    );
  }

});

module.exports = FluxInfo;