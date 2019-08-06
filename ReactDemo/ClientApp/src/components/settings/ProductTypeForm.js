import React, { Component } from 'react';

export class ProductTypeForm extends Component {

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
  }

  render() {
    return (
      <div>
        <div class="form-group">
          <label for="email">Product Type</label>
          <input class="form-control"/>
        </div>
        <div class="form-group">
          <label for="email">Multiplier</label>
          <input class="form-control" type="number"/>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="submit" class="btn btn-default">Cancel</button>
     </div>
    )
  }
}
