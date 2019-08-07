import React, { Component } from 'react';
import { Button, Form, Input, FormGroup, FormControl } from 'react-bootstrap';
import { withRouter } from 'react-router'

export class LocationEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = { location: {
        id: 0,
        name: "",
        code: "",
      } 
    };
    fetch('api/location/getById?id=' + this.props.match.params.locationId)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({ location: data, loading: false });
        });
  }

  handleFormSubmit(e, component){
    e.preventDefault();
    fetch("api/location/addOrUpdateLocation", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',                  
      },
      method: "POST",
      body:  JSON.stringify(component.state.location)
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
    console.log(event.target.name);
    console.log(event.target.value);

    this.setState({location: {...this.state.location, [fieldName]: fleldVal}})
  }

  render() {
    var location = this.state.location;
    return (
      <div>
        <Form ref="locationForm" onSubmit={(e) => this.handleFormSubmit(e, this)}>
          <FormGroup controlId="formLocationName" required>
            <label for="name">Location Name</label>
            <FormControl 
              type="text" placeholder="Enter location" value={location.name} 
              name='name' 
              onChange={this.handleChange.bind(this)} 
              />
          </FormGroup>

          <FormGroup controlId="formLocationCode" required>
            <label for="email">Location Code</label>
            <FormControl 
                type="text" 
                placeholder="Enter location code" 
                value={location.code}
                name='code' 
                onChange={this.handleChange.bind(this)} 
            />
          </FormGroup>

          <Button type="submit" variant="outline-success" className="btn-primary">
            Submit
          </Button>        
          <Button onClick={() => this.props.history.go(-1)} variant="outline-success">
            Cancel
          </Button>
        </Form>
         
        {/* <h4>Connect to location</h4>
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
        </div> */}
     </div>
    )
  }
}
