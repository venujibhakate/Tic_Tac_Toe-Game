import React from 'react';


// child component and pass props from parent Board component.
class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <button
          className="square"
          onClick={() => this.setState({value: 'X'})}
        >
          {this.state.value}
        </button>
      );
    }
  }
export default Square;