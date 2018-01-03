var React = require('react');
var FluxCartActions = require('../../../Actions/user_actions');


// Flux product view
var FluxSinglePost = React.createClass({

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
    //var fav ={this.props.post.destination_categories}
    var imagePic = (this.props.post.image == null ? 'default.png' : this.props.post.image)
    return (
      <div className="flux-single-post">
        <div className="hello row">
          <img src={'../../public/img/' + imagePic} className="post_userPic" />
          <p className="post_username">@{this.props.post.username}</p>
          <p className="post_time">{this.props.post.created_at}</p>
        </div>
        <p>{this.props.post.post}</p>
      </div>
    );
  }

});

module.exports = FluxSinglePost;