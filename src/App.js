import React, { Component } from "react";
import Start from "./Containers/Start/Start";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Start />
      </BrowserRouter>
    );
  }
}

export default App;
