import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';

export class RouteEditForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      route: {
        id: 0,
        departureId: 0,
        destinationId: 0
      },
      locations: [],
    };
    var routeId = this.props.match.params.routeId;
    if(routeId != null && routeId != 0)
    {
      fetch('api/route/getById?id=' + routeId)
        .then(response => response.json())
        .then(data => {
          this.setState({...this.state, route: data, loading: false });
        });
    }

      fetch('api/location/getAll')
      .then(response => response.json())
      .then(data => {
        this.setState({...this.state, locations: data, loading: false });
      });
  }

  renderOptions(locations)
  {
    if(locations == undefined) return;
    return locations.map(item =>
      <option value={item.id}>{item.name}</option>    
    );
  }

  handleFormSubmit(e, component){
    e.preventDefault();
    fetch("api/update/addOrUpdateRoute", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',                  
      },
      method: "POST",
      body:  JSON.stringify(component.state.route)
    })
    .then(function(response){ 
      return response.json();   
    })
    .then(function(data){ 
      if(data){
        component.props.history.go(-1);
      }
    });
  }
  
  handleChange(event) {
    let fieldName = event.target.name;
    let fleldVal = event.target.value;
    this.setState({...this.state, route: {...this.state.route, [fieldName]: fleldVal}})
  }
  
  render() {
    var route = this.state.route;
    return (
      <div>
      <Form ref="locationForm" onSubmit={(e) => this.handleFormSubmit(e, this)}
        onSubmit={(e) => this.handleFormSubmit(e, this)}>
        <div class="form-group">
          <label for="departureId">Departure</label>
          <Form.Control as="select">
            value={route.departureId}
            class="form-control" 
            name='departureId' 
            onChange={this.handleChange.bind(this)}>
          {this.renderOptions(this.state.locations)}
          </Form.Control>
        </div>
        
        <div class="form-group">
          <label for="destinationId">Destination</label>
          <select 
            value={route.destinationId}
            class="form-control" 
            name='departureId' 
            onChange={this.handleChange.bind(this)}>
          {this.renderOptions(this.state.locations)}
          </select>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="submit" class="btn btn-default">Cancel</button>
      </Form>
      </div>
      );
    }
  }
  