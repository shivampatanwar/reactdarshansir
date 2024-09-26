import React from "react";

export default class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("Lifecycle constructor");

    this.state = {
      mount: true,
    };
  }

  // componentDidMount() {
  //   console.log("Lifecycle componentDidMount");
  //   console.log("================================")
  // }

  componentDidUpdate() {
    console.log("Lifecycle componentDidUpdate");
    console.log("================================")
  }


  render() {
    console.log("Lifecycle render");
    return (
      <div id="div">
        <h1>Lifecycle</h1>   
        <button onClick={() => this.setState({ mount: !this.state.mount })}>CLICK</button>
        {this.state.mount ? <User /> : null}
      </div>
    );
  }
}

class User extends React.Component {

    componentWillUnmount() {
      console.log("User componentWillUnmount");
    }

    componentDidMount() {
      console.log("User componentDidMount");
    }
  

  render() {
    return (
      <div>
        <h2>User</h2>
      </div>
    );
  }
}
