import React, { Component } from 'react';
import Navigasi from "./component/navbar";
import Header from "./component/header";
import Rellax from "./component/rellax";

class App extends Component {
  render() {
    return (
      <div>
        <Navigasi />
        <Header />
        <Rellax />
      </div>
    );
  }
}

export default App;