import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div>
        <input value={this.props.input} onChange={this.props.handleChange} />
        <button onClick={this.props.handleAddTodo}>add todo</button>
      </div>
    );
  }
}

export default Input;
