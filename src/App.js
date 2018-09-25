import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  add = () => {
    this.props.add(this.refs.myinput.value);
  };

  render() {
    const list = this.props.todo.map((data, i) => <li key={i}>{data}</li>);
    return (
      <div className="App">
        <input type="text" placeholder="Enter text" ref="myinput" />
        <button onClick={this.add}>add</button>
        <div>
          <ul>{list}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispachToProps = dispach => ({
  add: value => dispach({ type: "ADD", value })
});

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
