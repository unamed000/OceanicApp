import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom'

export class RouteList extends Component {
  constructor(props){
    super(props);
    this.state = { routes: [] };
  }

  onToggleActiveClicked(route, component)
  {
    var toggleActive = !route.isActive;
    fetch("api/route/toggleActive", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',                  
      },
      method: "POST",
      body:  JSON.stringify({
        routeId: route.routeId,
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

    fetch('api/route/getAll', {
      method: "GET",
      headers: myHeaders
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ routes: data, loading: false });
    });
  }

  renderRow(item) {
    return (
      <tr>
      <td>{item.departureLocation.name}</td>
      <td>{item.destinationLocation.name}</td>

      <td>
        <div class="btn-group" role="group" aria-label="Basic example">
          <Link to={"/dashboard/routes/" + item.routeId} className="btn btn-primary">Edit</Link>
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
        <h4>Routes</h4>
        <Link to="/dashboard/routes/0" className="btn btn-primary">+ Add</Link>
        <table className="table">
          <tbody>
          <tr>
            <th>Departure</th>
            <th>Destination</th> 
            <th></th>
          </tr>
          {this.state.routes.map(item =>
            this.renderRow(item)
          )}
          </tbody>
        </table>
      </div>
    );
  }
}
