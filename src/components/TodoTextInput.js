import React, { Component } from "react";
import classnames from "classnames";

class TodoTextInput extends Component {
  state = {
    text: this.props.text || ""
  };

  handleSubmit = event => {
    const text = event.target.value.trim();
    if (event.which === 13) {
      this.props.onSave(text);
      this.setState({ text: "" });
    }
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <input
        className={classnames({
          edit: this.props.editing,
          "new-todo": true
        })}
        placeholder="et tu to do?"
        value={this.state.text}
        autoFocus="true"
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default TodoTextInput;
