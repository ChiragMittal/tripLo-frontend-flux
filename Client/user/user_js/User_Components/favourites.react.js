var React = require('react');
var FluxCartActions = require('../User_User_Actions/user_actions');


// Flux product view
var FluxFavourites = React.createClass({

  // Add item to cart via Actions
  // editInfo: function (event) {
  //     // var name= this.props.product.name;
  //     // var username= this.props.user.username;
  //      var fname= this.props.user.fname;
  //      var lname= this.props.user.lname;
  //      var dob= this.props.user.dob;
  //      var info= this.props.user.info; 

  //   FluxCartActions.editInfo(fname,lname,dob,info);
  //  // FluxCartActions.updateCartVisible(true);
  // },


  // Render product View
  render: function () {
    var fav ={this.props.user.destination_categories}
    //var imagePic = (this.props.user.image == null? 'default.png': this.props.user.image)
    return (
      <div className="flux-count">
           <ul>
               {fav.map(function(value,index){
                   <li key={index}>
                     <h3 className="name">{fav[index] }</h3>
                   </li>
               })}
           </ul>
      </div>
    );
  }

});

module.exports = FluxFavourites;