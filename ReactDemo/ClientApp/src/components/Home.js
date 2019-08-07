import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Route Finder</h1>
        <div>
          <div class="form-group">
          <label for="email">Departure</label>
            <select class="form-control">
                <option>Location A</option>
                <option>Location B</option>
                <option>Location C</option>
            </select>
          </div>
          <div class="form-group">
          <label for="email">Destination</label>
              <select class="form-control">
                  <option>Location A</option>
                  <option>Location B</option>
                  <option>Location C</option>
              </select>
          </div>
          <div class="form-group">
          <label for="email">Parcel weight</label>
              <input type="number" class="form-control" placeholder="kg"/>
 
          </div>
          <div class="form-group">
              <label for="email">Product Type</label>
              <select class="form-control">
                <option>Option A</option>
                <option>Option B</option>
                <option>Option C</option>
              </select>
          </div>
          <button type="submit" class="btn btn-primary">Search</button>
       </div>

       <div> 
          <h4 class="row">Shortest route from Location A - Location C</h4>
          <label class="col-md-3">Cost: 400$</label>
          <label class="col-md-3">Time: 8 hours</label>

          <table className="table">
          <tbody>
          <tr>
            <th>Departure</th>
            <th>Destination</th> 
            <th>Responsible side</th>
          </tr>
          <tr>
            <td>Location A</td>
            <td>Location B</td> 
            <td>Oceanic Airlines</td> 
          </tr>
          <tr>
            <td>Location B</td>
            <td>Location C</td> 
            <td>East India</td> 
          </tr>
          </tbody>
        </table>
       </div>

       <div> 
          <h4 class="row">Cheapest Route route from Location A - Location C</h4>
          <label class="col-md-3">Cost: 200$</label>
          <label class="col-md-3">Time: 16 hours</label>

          <table className="table">
          <tbody>
          <tr>
            <th>Departure</th>
            <th>Destination</th> 
            <th>Responsible side</th>
          </tr>
          <tr>
            <td>Location A</td>
            <td>Location B</td> 
            <td>East India</td> 
          </tr>
          <tr>
            <td>Location B</td>
            <td>Location C</td> 
            <td>Telstar</td> 
          </tr>
          </tbody>
        </table>
       </div>
      </div>
    );
  }
}
