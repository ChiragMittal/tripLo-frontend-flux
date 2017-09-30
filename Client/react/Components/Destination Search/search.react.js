import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest';

var AppDispatcher = require('../../Dispatcher/appDispatcher');
var FluxCartActions = require('../../Actions/fluxcartActions');
var tripAPI = require('../../API/tripAPI.js');
//import { AutoComplete }     from 'material-ui';
//import JSONP                from 'jsonp';
//import getMuiTheme          from 'material-ui/styles/getMuiTheme';
//import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin';

//injectTapEventPlugin();

var languages = [
  {
    name: 'Delhi',
    //year: 1972
  },
  {
    name: 'Mumbai',
    //year: 2012
  },

];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => {
  tripAPI.fetch_data(suggestion.name);
  //alert(suggestion.name);
  return suggestion.name;
}

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class App extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }


  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });

    tripAPI.search_bar(newValue, this.replace_data);

  };

  // replace_data = ({ destination_data }) => {

  //        languages=destination_data;
  // };

  replace_data(destination_data) {
    languages = destination_data;
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };


  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Where to Plan',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
    );
  }
}

export default App;