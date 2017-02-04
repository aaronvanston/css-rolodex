import React from 'react';
import Autosuggest from 'react-autosuggest';

import cssSuggesstions from './content.json';
import styles from './SearchSuggest.css';

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : cssSuggesstions.filter(suggestion =>
    suggestion.name.toLowerCase().indexOf(inputValue) >= 0
  );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div className={styles.suggesstionWrapper}>
    <span className={styles.suggesstionName}>{suggestion.name}</span>
    <span className={styles[`${suggestion.type}Type` || 'defaultType']}>CSS {suggestion.type}</span>
  </div>
  );

export default class SearchSuggest extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search',
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={styles}
      />
    );
  }
}
