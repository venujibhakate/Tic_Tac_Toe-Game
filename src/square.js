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
        <button className="square" onClick={() => alert('click')}>
          {this.props.value}
        </button>
      );
    }
  }
export default Square;