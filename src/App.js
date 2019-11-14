import React from "react";
import "./App.css";
import Input from "./Components/Input";
import List from "./Components/List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      list: []
    };
  }
  handleAddTodo = () => {
    const { input, list } = this.state;
    list.push(input);
    this.setState({
      list
    });
  };
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };
  render() {
    const { list, input } = this.state;
    return (
      <div className="App">
        <Input
          handleChange={this.handleChange}
          input={input}
          handleAddTodo={this.handleAddTodo}
        />
        <List list={list} />
      </div>
    );
  }
}

export default App;
