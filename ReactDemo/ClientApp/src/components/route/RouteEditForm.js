import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';

export class RouteEditForm extends Component {
  
    constructor(props) {
      super(props);
      this.state = { currentCount: 0 };
    }
  
    render() {
      return (
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
        <label for="email">Departure</label>
        <select class="form-control">
            <option>Location A</option>
            <option>Location B</option>
            <option>Location C</option>
        </select>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="submit" class="btn btn-default">Cancel</button>

       </div>
      );
    }
  }
  