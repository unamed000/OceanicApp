import React, { Component } from 'react';

export class LocationEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
  }

  render() {
    return (
      <div>
        <div class="form-group">
          <label for="email">Location Name</label>
          <input class="form-control"/>

        </div>
        <div class="form-group">
          <label for="email">Location Code</label>
          <input class="form-control"/>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="submit" class="btn btn-default">Cancel</button>

        <h4>Connect to location</h4>
        <div>
        <table className="table">
          <tbody>
          <tr>
            <th>Location</th>
          </tr>
          <tr>
            <td>Location B</td>
          </tr>
          <tr>
            <td>Location C</td> 
          </tr>
          </tbody>
        </table>

        <h4>Connect from location</h4>
        <table className="table">
          <tbody>
          <tr>
            <th>Location</th>
          </tr>
          <tr>
            <td>Location D</td>
          </tr>
          <tr>
            <td>Location E</td> 
          </tr>
          </tbody>
        </table>
        </div>
     </div>
    )
  }
}
