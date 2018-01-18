import React, { Component } from "react";
import classnames from "classnames";

import TodoItem from "./TodoItem";

class MainSection extends Component {
  render() {
    const todoItems = this.props.todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} {...this.props.actions} />
    ));
    return (
      <section className="main">
        <ul className="todo-list">{todoItems}</ul>
      </section>
    );
  }
}

export default MainSection;
