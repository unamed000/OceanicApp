import React, { Component } from 'react';

export class Counter extends Component {
  displayName = Counter.name

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th> 
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td> 
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td> 
            <td>94</td>
          </tr>          
  </tbody>
        </table>
      </div>
    );
  }
}
