import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "./Header";
import MainSection from "./MainSection";

// import { addTodo } from "../actions";
import * as TodoActions from "../actions";

const App = props => {
  const { todos, actions } = props;
  return (
    <div>
      <Header addTodo={actions.addTodo} />
      <MainSection todos={todos} actions={actions} />
    </div>
  );
};

const mapStatetoProps = state => ({
  todos: state.todos
});

const mapDispatchtoProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
