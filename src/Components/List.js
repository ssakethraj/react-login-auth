import React from "react";

class List extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <ul>
          {list.length > 0
            ? list.map(item => {
                return <li>{item}</li>;
              })
            : "List is empty, add todos"}
        </ul>
      </div>
    );
  }
}

export default List;
