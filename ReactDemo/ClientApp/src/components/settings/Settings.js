import React, { Component } from 'react';


export class Settings extends Component {
  constructor(props){
    super(props);
    this.state = {size: 3}
  }
  render() {
    return (
        <div>
         <div class="form-group">
            <label for="email">Hours between flight</label>
            <input type="number" class="form-control" value="8"/>
         </div>

         <div class="form-group">
             <div class="col-md-12">
                <label for="email">Product Weight Config</label>
                <a class="btn btn-primary" href="/editWeightConfig">+</a>
             </div>
            <table className="table">
            <tbody>
            <tr>
                <th>Weight from</th>
                <th>Weight to</th>
                <th></th>
            </tr>
            <tr>
                <td>0</td>
                <td>1</td>
                <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                <a href="/routes/" className="btn btn-danger">Delete</a>
                </div>
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>2.5</td>
                <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                <a href="/routes/" className="btn btn-danger">Delete</a>
                </div>
                </td>
            </tr>
            </tbody>
            </table>
         </div>

         <div class="form-group">
             <div class="col-md-12">
                <label for="email">Product Type Config</label>
                <a class="btn btn-primary" href="/editProductTypeConfig">+</a>
             </div>
            <table className="table">
            <tbody>
            <tr>
                <th>Type</th>
                <th>Multiplier</th>
                <th></th>
            </tr>
            <tr>
                <td>Normal</td>
                <td>1</td>
                <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                <a href="/routes/" className="btn btn-danger">Delete</a>
                </div>
                </td>
            </tr>
            <tr>
                <td>Weapon</td>
                <td>1.2 (20% higher)</td>
                <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                <a href="/routes/" className="btn btn-danger">Delete</a>
                </div>
                </td>
            </tr>
            </tbody>
            </table>
         </div>

         <button type="submit" class="btn btn-primary">Submit</button>
         <button type="submit" class="btn btn-default">Cancel</button>
 
        </div>
       );
  }
}
