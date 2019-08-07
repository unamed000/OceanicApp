import React, { Component } from 'react';
import axios from 'axios';
import ApiUtils from '../static/ApiUtils';

export class Home extends Component {

  constructor(props) {
    super(props);
    this.initializeState();
    this.handleOnChangeLocation = this.handleOnChangeLocation.bind(this);
    this.handleOnChangeWeight = this.handleOnChangeWeight.bind(this);
    this.handleOnChangeProductType = this.handleOnChangeProductType.bind(this);
    this.handleOnClickSearchRoute = this.handleOnClickSearchRoute.bind(this);
  };

  initializeState() {
    this.state = {
      departure: {
        code: "",
        label: ""
      },
      destination: {
        code: "",
        label: ""
      },
      weight: 0,
      productType: 0,
      searchRouteResult: {
        routes: [],
        totalCost: 0,
        hours: 0
      },
      isLoading: false,
      isSearchingRoutes: false,
      actionCounter: 0
    };
  }

  handleOnClickSearchRoute() {
    var searchRouteUrl = this.buildSearchRouteUrl();
    var self = this;
    axios.get(searchRouteUrl)
      .then(function (response) {
        console.log(response);
        self.setRouteResults(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        self.countAction();
      });
  };

  handleOnChangeLocation(e) {
     var elementName = e.target.name;
     var value = e.target.value;
     var label = e.target.options[e.target.selectedIndex].text

    if (elementName === "departure") {
      this.setState({
        departure: {
          code: value,
          label: label
        }
      });
    } else if (elementName === "destination") {
      this.setState({
        destination: {
          code: value,
          label: label
        }
      });
    }
  };

  handleOnChangeWeight(e) {
    this.setState({
      weight: e.target.value
    });
  };

  handleOnChangeProductType(e) {
    this.setState({
      productType: e.target.value
    });
  };

  buildSearchRouteUrl() {
    var url = ApiUtils.apis.SEARCH_ROUTE;

    url = url.replace("{0}", this.state.departure.code);
    url = url.replace("{1}", this.state.destination.code);
    url = url.replace("{2}", this.state.weight);
    url = url.replace("{3}", this.state.productType);
    
    return url;
  };

  setRouteResults(routes) {
    this.setState({
      searchRouteResult: routes
    });
  };

  countAction() {
    this.setState({
      actionCounter: this.state.actionCounter++
    })
  };
  
  render() {

    const searchResult = this.state.searchRouteResult;

    return (
      <div>
        <h1>Route Finder</h1>
        <div>
          <div class="form-group">
          <label for="email">Departure</label>
            <select class="form-control"
                    name="departure"
                    onChange={this.handleOnChangeLocation}>
                <option value="LA">Location A</option>
                <option value="LB">Location B</option>
                <option value="LC">Location C</option>
            </select>
          </div>
          <div class="form-group">
          <label for="email">Destination</label>
              <select class="form-control"
                      name="destination"
                      onChange={this.handleOnChangeLocation}>
                  <option value="LA">Location A</option>
                  <option value="LB">Location B</option>
                  <option value="LC">Location C</option>
              </select>
          </div>
          <div class="form-group">
          <label for="email">Parcel weight</label>
              <input type="number" class="form-control" 
                    placeholder="kg"
                    onChange={this.handleOnChangeWeight}/>
          </div>
          <div class="form-group">
              <label for="email">Product Type</label>
              <select class="form-control"
                      onChange={this.handleOnChangeProductType}>
                <option value="1">Option A</option>
                <option value="2">Option B</option>
                <option value="3">Option C</option>
              </select>
          </div>
          <button onClick={this.handleOnClickSearchRoute} class="btn btn-primary">Search</button>
       </div>

        <div className={ searchResult.routes.length === 0 && this.actionCounter > 0 ? "" : "hidden" }>
          <h2>No routes found</h2>
        </div>

       <div className={ searchResult.routes.length > 0 && this.actionCounter > 0 ? "" : "hidden" }> 
          <h4 class="row">Shortest route from {this.state.departure.label} - {this.state.destination.label}</h4>
          <label class="col-md-3">Cost: {searchResult.totalCost}</label>
          <label class="col-md-3">Time: {searchResult.time} hours</label>

          <table className="table">
          <tbody>
          <tr>
            <th>Departure</th>
            <th>Destination</th> 
            <th>Responsible side</th>
          </tr>
          {searchResult.routes.map((route, i) => {         
            return (
            <tr key={i}>
              <td>{route.fromLocaltion.name}</td>
              <td>{route.toLocation.name}</td>
              <td>{route.transportBy}</td>
            </tr>) 
            })
          }
          </tbody>
        </table>
       </div>

       <div class={ searchResult.routes.length > 0 && this.actionCounter > 0 ? "" : "hidden" }> 
        <h4 class="row">Cheapest route from {this.state.departure.label} - {this.state.destination.label}</h4>
            <label class="col-md-3">Cost: {searchResult.totalCost}</label>
            <label class="col-md-3">Time: {searchResult.time} hours</label>

            <table className="table">
            <tbody>
            <tr>
              <th>Departure</th>
              <th>Destination</th> 
              <th>Responsible side</th>
            </tr>
            {searchResult.routes.map((route, i) => {         
              return (
              <tr key={i}>
                <td>{route.fromLocaltion.name}</td>
                <td>{route.toLocation.name}</td>
                <td>{route.transportBy}</td>
              </tr>) 
              })
            }
            </tbody>
          </table>
       </div>
      </div>
    );
  }
}
