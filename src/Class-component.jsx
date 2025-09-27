import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Classes</h2>
        <ul>
          <li>Members</li>
          <li>Methods</li>
            <li>Constructors </li>
          {/* <li>Dinner at {this.props.time} 🍲</li> */}
        
        </ul>
      </div>
    );
  }
}

export default ClassComponent;
