import React, { Component } from 'react';
import { LocationEditForm } from './LocationEditForm';
import { Switch, Route } from 'react-router';

export class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
  }
  render() {
    return (
      <div>
        <h4>Locations</h4>

        <a class="btn btn-primary">+ Add</a>
        <table className="table">
          <tbody>
          <tr>
            <th>Location Name</th>
            <th>Location Code</th>

            <th></th>
          </tr>
          <tr>
            <td>Location A</td>
            <td>LOCATIONA</td>

            <td>
            <div class="btn-group" role="group" aria-label="Basic example">
              <a href="/dashboard/locations/1" className="btn btn-primary">Edit</a>
              <a href="/routes/" className="btn btn-danger">Disable</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>Location B</td> 
            <td>LOCATIONB</td>
            <td>
            <div class="btn-group" role="group" aria-label="Basic example">
              <a href="/dashboard/locations/1" className="btn btn-primary">Edit</a>
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
