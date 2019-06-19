import React, { Component } from "react";
import { toggleComplete } from "../actions";
import { connect } from "react-redux";
import "../App.css";

class Todo extends Component {
  toggleComplete(event) {
    this.props.toggleComplete(this.props.index);
  }

  render() {
    return (
      <p className="todoList">
        <input type="checkbox" onChange={this.toggleComplete.bind(this)} />
        {this.props.todo.value}
      </p>
    );
  }
}

export default connect(
  null,
  { toggleComplete }
)(Todo);
