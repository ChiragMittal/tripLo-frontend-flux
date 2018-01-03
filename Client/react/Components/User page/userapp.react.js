var React = require('react');
var { Router, Route, IndexRoute, Link, hashHistory } = require('react-router');

var PostsStore = require('../../Stores/User Page/postingStores');
var PicInfoStore = require('../../Stores/User Page/userstaticStores');
// var ProductStore = require('../Stores/tripStore');
// var MapStore = require('../Stores/mapStore');
var FluxCount = require('./follow.react.js');
var FluxInfo = require('./info.react.js');
var FluxPictures = require('./pictures.react.js');

//import NpsForecastMap from './container.react.js';
import { Grid, Row, Col } from 'react-bootstrap';



// Method to retrieve state from Stores
function getCartState() {
  return {
    information: PicInfoStore.getUserInfo(),
    //posting : PostsStore.getpost()
    //  selectedProduct: ProductStore.getSelected(),
    //  cartItems: CartStore.getCartItems(),
    //  cartCount: CartStore.getCartCount(),
    // // cartTotal: CartStore.getCartTotal(),
    //  cartVisible: CartStore.getCartVisible(),
    //  //,user: CartStore.getUserLoggedIn()            -> server request for logged in user data
    //  mapMarkers: MapStore.getMarkers(),
    //  mapCentre: MapStore.getCentre()
  };
}

// Define main Controller View
var FluxUserApp = React.createClass({

  // Get initial state from stores
  getInitialState: function () {
    return getCartState();
  },

  // Add change listeners to stores
  componentDidMount: function () {
    PicInfoStore.addChangeListener(this._onChange);
    //PostsStore.addChangeListener(this._onChange);
    // CartStore.addChangeListener(this._onChange);
    // MapStore.addChangeListener(this._onChange);
  },

  // Remove change listeners from stores
  componentWillUnmount: function () {
    PicInfoStore.removeChangeListener(this._onChange);
    //PostsStore.removeChangeListener(this._onChange);
    // CartStore.removeChangeListener(this._onChange);
    // MapStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function () {
    return (
      <div className="flux-user-app">


        <Grid>
          <Row className="show-grid">
            <Col md={3} className="text-center profile_part">

              <FluxPictures img={this.state.information.picpath} />
              <FluxInfo username={this.state.information.username} fname={this.state.information.fname} lname={this.state.information.lname} dob={this.state.information.dob} info={this.state.information.info} />
              <FluxCount follow_count={this.state.information.follow_count} following_count={this.state.information.following_count} favourites_count={this.state.information.favourites_count} />
            </Col>

            <Col md={5} mdOffset={4}>
              <ul>
                <li><Link to="/user">Post</Link></li>
                <li><Link to="/user/favourites">Favourites</Link></li>
              </ul>
            </Col>

            <Col md={5} mdOffset={4}>
              <main>
                {this.props.children}
              </main>
            </Col>


          </Row>
        </Grid>
      </div>

    );
  },

  // Method to setState based upon Store changes
  _onChange: function () {
    this.setState(getCartState());
  }

});

module.exports = FluxUserApp;
