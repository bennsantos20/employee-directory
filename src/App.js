import React, { Component } from "react";
import Header from "./components/layout/Header";
import SearchBar from "./components/layout/SearchBar";
import Directory from "./components/Directory";

import "./App.css";

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Directory />
      </>
    );
  }
}

export default App;