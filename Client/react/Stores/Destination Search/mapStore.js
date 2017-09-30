var AppDispatcher = require('../../Dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../../Constants/fluxcartConstants');
var _ = require('underscore');
import axios from 'axios';

// var urls = require('../Constants/url.js');

// Define initial data points
/*var  _product = [], _selected = null;
_product=[
     {
        id: '0011001',
        name: 'India Gate',
        image: 'delhi3.jpg',
        description: 'The finest lager money can buy. Hints of keyboard aerosol, with a whiff of iKlear wipes on the nose. If you pass out while drinking this beverage, Chris Sevilleja personally tucks you in.',
        inventory : 1
     },
     {
        id: '0011002',
        name: 'Qutub Minar',
        image: '2FB6E79E00000578-0-image-a-2_1451640638613.jpg',
        description: 'The finessjdnjit lager money can buy. Hints of kessdyboard aerosol, with a whiff of iKlear wipes on the nose. If you pass out while drinking this beverage, Chris Sevilleja personally tucks you in.',
        inventory : 1
     }

    ];

    /*function fetchdestinations(query){
        axios.get(urls.searchdestinations).then(function(response){
          this._product=response.destinations;
        })
    }*/


var _mapmarkers = [], _mapcentre = { lat: 28, lng: 79 };

function loadMapData(data) {
  _mapmarkers = data;
}

function loadMapCentre(data) {
  _mapcentre = { lat: data[0].lat, lng: data[0].lng };
}

/*function loadMapCentre(data) {
   _mapcentre=data;
}*/

// Extend ProductStore with EventEmitter to add eventing capabilities
var MapStore = _.extend({}, EventEmitter.prototype, {
  // Return Product data
  getMarkers: function () {
    return _mapmarkers;
  },
  getCentre: function () {
    return _mapcentre;
  },
  // Return selected Product
  // getSelected: function () {
  //   return _selected;
  // },
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
    case FluxCartConstants.RECEIVEMAP_DATA:
      loadMapData(action.data);
      loadMapCentre(action.data);

      break;
    // Respond to SELECT_PRODUCT action
    // case FluxCartConstants.SELECT_PRODUCT:
    //   setSelected(action.data);
    // break;
    default:
      return true;
  }
  // If action was responded to, emit change event
  MapStore.emitChange();
  return true;
});

module.exports = MapStore;
