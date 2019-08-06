import React, { Component } from 'react';
import { Route } from 'react-router';
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
        <Route exact path='/' component={Home} />
        <Route path='/locations' component={LocationList} />
        <Route path='/editLocations' component={LocationEditForm} />

        <Route path='/routes' component={RouteList} />
        <Route path='/editRoutes' component={RouteEditForm} />

        <Route path='/settings' component={Settings} />
        <Route path='/editWeightConfig' component={WeightConfigForm} />
        <Route path='/editProductTypeConfig' component={ProductTypeForm} />
      </Layout>
    );
  }
}
