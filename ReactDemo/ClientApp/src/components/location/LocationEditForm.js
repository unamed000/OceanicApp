import React, { Component } from 'react';

export class LocationEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  render() {
    return (
      <div>
        <table className="table">
          <tbody>
          <tr>
            <th>From</th>
            <th>To</th> 
            <th></th>
          </tr>
          <tr>
            <td>Location A</td>
            <td>Location B</td> 
            <td>
            <div class="btn-group" role="group" aria-label="Basic example">
              <a href="/editRoutes" className="btn btn-primary">Edit</a>
              <a href="/routes/" className="btn btn-danger">Disable</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>Location B</td>
            <td>Location A</td> 
            <td>
            <div class="btn-group" role="group" aria-label="Basic example">
              <a href="/editRoutes" className="btn btn-primary">Edit</a>
              <a href="/routes/" className="btn btn-success">Enable</a>
            </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
