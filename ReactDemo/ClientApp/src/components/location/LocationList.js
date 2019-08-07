import React, { Component } from 'react';
import { LocationEditForm } from './LocationEditForm';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom'

export class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = { locations: [] };
  }

  onToggleActiveClicked(location, component)
  {
    var toggleActive = !location.isActive;
    fetch("api/location/toggleActive", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',                  
      },
      method: "POST",
      body:  JSON.stringify({
        locationId: location.locationId,
        isActive: toggleActive
      })
    })
    .then(function(response){ 
      return response.json();   
    })
    .then(function(data){ 
      if(data){
        component.fetchData();
      }
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData()
  {
    var myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');

    fetch('api/location/getAll', {
      method: "GET",
      headers: myHeaders
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ locations: data, loading: false });
    });
  }

  renderRow(item) {
    return (
      <tr>
      <td>{item.name}</td>
      <td>{item.code}</td>

      <td>
        <div class="btn-group" role="group" aria-label="Basic example">
          <Link to={"/dashboard/locations/" + item.locationId} className="btn btn-primary">Edit</Link>
          {
            item.isActive 
              ? <button className="btn btn-danger" onClick={e => this.onToggleActiveClicked(item, this)}>Disable</button>
              : <button className="btn btn-success" onClick={e => this.onToggleActiveClicked(item, this)}>Enable</button>
          }
        </div>
      </td>
    </tr>
    );
  }

  render() {
    return (
      <div>
        <h4>Locations</h4>
        <Link to="/dashboard/locations/0" className="btn btn-primary">+ Add</Link>

        <table className="table">
          <tbody>
          <tr>
            <th>Location Name</th>
            <th>Location Code</th>
            <th></th>
          </tr>
          {this.state.locations.map(item =>
            this.renderRow(item)
          )}
          </tbody>
        </table>

      </div>
    );
  }
}
