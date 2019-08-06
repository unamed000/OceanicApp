import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { LocationList } from './components/location/LocationList';
import { LocationEditForm } from './components/location/LocationEditForm';
import { RouteList } from './components/route/RouteList';
import { RouteEditForm } from './components/route/RouteEditForm';
import { Settings } from './components/settings/Settings';
import { WeightConfigForm } from './components/settings/WeightConfigForm';
import { ProductTypeForm } from './components/settings/ProductTypeForm';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/dashboard' component={Home} />

          <Route path='/dashboard/locations/:locationId' component={LocationEditForm}/>
          <Route path='/dashboard/locations' component={LocationList} />
          
          <Route path='/dashboard/routes' component={RouteList} />
          <Route path='/dashboard/editRoutes' component={RouteEditForm} />

          <Route path='/dashboard/settings' component={Settings} />
          <Route path='/dashboard/editWeightConfig' component={WeightConfigForm} />
          <Route path='/dashboard/editProductTypeConfig' component={ProductTypeForm} />
        </Switch>
 
      </Layout>
    );
  }
}
