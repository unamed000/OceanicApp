import React, { Component } from 'react';

export class LoginForm extends Component {
  
    constructor(props) {
      super(props);
      this.state = { currentCount: 0 };
    }
  
    render() {
      return (
        <div>
          <h1>Counter</h1>
          <h2>This is another header, seem cool enough</h2>
          <p>This is a simple example of a React component.</p>
          <a href="/dashboard">Login</a>
        </div>
      );
    }
  }
  