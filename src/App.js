import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("In constructor");
    this.state = {
      input: "React"
    };
  }
  componentDidMount() {
    console.log("In componentDidMount");
  }

  componentDidUpdate() {
    console.log("In componentDidUpdate");
  }

  static getDerivedStateFromProps() {
    console.log("In getDerivedStateFromProps");
    return true;
  }

  shouldComponentUpdate() {
    console.log("In shouldComponentUpdate");
    return true;
  }

  static getSanpshotBeforeUpdate() {
    console.log("In getSanpshotBeforeUpdate");
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    console.log("In render");
    return (
      <>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <h2>Hello {this.state.input}</h2>
      </>
    );
  }
}

export default App;
