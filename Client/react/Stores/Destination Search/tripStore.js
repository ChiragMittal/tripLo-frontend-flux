var AppDispatcher = require('../../Dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../../Constants/fluxcartConstants');
var _ = require('underscore');
import axios from 'axios';

//var urls = require('../Constants/url.js');

// Define initial data points
var _product = [], _selected = null;
// _product=[
//  {
//     id: '0011001',
//     name: 'India Gate',
//     image: 'delhi3.jpg',
//     description: 'The finest lager money can buy. Hints of keyboard aerosol, with a whiff of iKlear wipes on the nose. If you pass out while drinking this beverage, Chris Sevilleja personally tucks you in.',
//     inventory : 1
//  },
//  {
//     id: '0011002',
//     name: 'Qutub Minar',
//     image: '2FB6E79E00000578-0-image-a-2_1451640638613.jpg',
//     description: 'The finessjdnjit lager money can buy. Hints of kessdyboard aerosol, with a whiff of iKlear wipes on the nose. If you pass out while drinking this beverage, Chris Sevilleja personally tucks you in.',
//     inventory : 1
//  }

// ];

/*function fetchdestinations(query){
    axios.get(urls.searchdestinations).then(function(response){
      this._product=response.destinations;
    })
}*/

// Method to load product data from mock API
function loadProductData(data) {
  return;

}

function loadTripData(data) {
  _product = data;
}

// Method to set the currently selected product variation
function setSelected(id) {
  _selected = _product[id].name;
}
// Extend ProductStore with EventEmitter to add eventing capabilities
var ProductStore = _.extend({}, EventEmitter.prototype, {
  // Return Product data
  getProduct: function () {
    return _product;
  },
  // Return selected Product
  getSelected: function () {
    return _selected;
  },
  // Emit Change event
  emitChange: function () {
    this.emit('change');
  },
  // Add change listener
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  // Remove change listener
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }
});

// Register callback with AppDispatcher
AppDispatcher.register(function (payload) {
  var action = payload.action;
  var text;
  switch (action.actionType) {
    // Respond to RECEIVE_DATA action
    case FluxCartConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;
    // Respond to SELECT_PRODUCT action
    case FluxCartConstants.SELECT_PRODUCT:
      setSelected(action.data);
      break;

    case FluxCartConstants.RECEIVEPRODUCT_DATA:
      loadTripData(action.data);
      break;
    default:
      return true;
  }
  // If action was responded to, emit change event
  ProductStore.emitChange();
  return true;
});

module.exports = ProductStore;
