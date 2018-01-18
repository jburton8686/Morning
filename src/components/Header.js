import React, { Component } from "react";
import TodoTextInput from "./TodoTextInput";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>Meow Todos</h1>
          <TodoTextInput onSave={this.props.addTodo} placeholder="meow what?" />
        </header>
      </div>
    );
  }
}

export default Header;
