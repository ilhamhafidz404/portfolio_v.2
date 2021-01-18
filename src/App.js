import React, { Component } from 'react';
import Navigasi from "./component/navbar";
import Header from "./component/header";
import Project from "./component/project";
import Skill from "./component/skill";

class App extends Component {
  render() {
    return (
      <div>
        <Navigasi />
        <Header />
        <Project />
        <Skill />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default App;