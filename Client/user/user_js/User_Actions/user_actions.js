var AppDispatcher = require('../User_Dispatcher/user_dispatcher');
var FluxCartConstants = require('../User_Constants/user_constants');

// Define action methods
var FluxCartActions = {

  addPhoto: function (img) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.ADD_PHOTO,
      img: img
    })
  },

  delPhoto: function (img) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.DEL_PHOTO,
      img: img
    })
  },

  // Add item to cart
  editInfo: function (fname,lname,dob,info) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.EDIT_INFO,
      fname: fname,
      lname : lname,
      dob : dob,
      info : info
    })
  },
  
   retrieveInfo: function (username,target,token) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RETRIEVE_INFO,
      username: username,
      token: token,
      target:target
    })
  },

  recieveInfo: function (data) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECIEVE_INFO,
      data : data
    })
  },

  retrievePost: function (username,target,token,start) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RETRIEVE_POST,
      username : username ,
      target : target,
      token : token,
      start : start
    })
  },

  loadPost: function (data) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.LOAD_POST,
      data : data
    })
  }

  // // Remove item from cart
  // removeFromCart: function (name) {
  //   AppDispatcher.handleAction({
  //     actionType: FluxCartConstants.CART_REMOVE,
  //     name: name
  //   })
  // },

  // // Update cart visibility status
  // updateCartVisible: function (cartVisible) {
  //   AppDispatcher.handleAction({
  //     actionType: FluxCartConstants.CART_VISIBLE,
  //     cartVisible: cartVisible
  //   })
  // },

  // fetch : function (query){
  //    AppDispatcher.handleAction({
  //     actionType: FluxCartConstants.CART_FETCH,
  //     query: query
  //   })
  // },

  // hotsearch : function(query){
  //   AppDispatcher.handleAction({
  //     actionType: FluxCartConstants.DESTINATIONHOT_SEARCH,
  //     query: query
  //   })
  // },

  // hotsearch_fetch : function(data){
  //   AppDispatcher.handleAction({
  //     actionType: FluxCartConstants.DESTINATIONHOT_SEARCHFETCH,
  //     data: data
  //   })
  // },

  // receiveMap: function (data) {
  //   AppDispatcher.handleAction({
  //     actionType: FluxCartConstants.RECEIVEMAP_DATA,
  //     data: data
  //   })
  // },

  // receiveProduct: function (data) {
  //   AppDispatcher.handleAction({
  //     actionType: FluxCartConstants.RECEIVEPRODUCT_DATA,
  //     data: data
  //   })
  // }

  //add new actions to checkLoggedIn(), logout()

};

module.exports = FluxCartActions;
