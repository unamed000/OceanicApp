import React, { Component } from 'react';

export class WeightConfigForm extends Component {

    constructor(props) {
      super(props);
      this.state = { currentCount: 0 };
    }

    render() {
      return (
        <div>
          <div class="form-group">
            <label for="email">Weight Form</label>
            <input class="form-control" type="number" placeholder="kg"/>
          </div>

          <div class="form-group">
            <label for="email">Weight To</label>
            <input class="form-control" type="number" placeholder="kg"/>
          </div>

          <div class="form-group">
            <label for="email">Price</label>
            <input class="form-control" type="number" placeholder="$"/>
          </div>
  
          <button type="submit" class="btn btn-primary">Submit</button>
          <button type="submit" class="btn btn-default">Cancel</button>
       </div>
      )
    }
  }
  