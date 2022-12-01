import React from "react";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import "./App.css";

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
  state = {
    expandedHeader: true,
    suggestedNames: []
  };

  handleSearch = (searchText) => {
    this.setState({
      expandedHeader: !searchText,
      suggestedNames: searchText ? name(searchText) : []
    });
  };

  render() {
    return (
      <div className="app-container">
        <Header expandedHeader={this.state.expandedHeader} />
        <SearchBox onInputChange={this.handleSearch} />
        <ResultsContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
