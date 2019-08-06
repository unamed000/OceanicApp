import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './Layout';
import { LocationList } from './location/LocationList';
import { RouteList } from './route/RouteList';
import { LocationEditForm } from './location/LocationEditForm';
import { Settings } from './location/Settings';
import { RouteEditForm } from './route/RouteEditForm';
import { Home } from './Home';

export class Dashboard extends Component {  
    render() {
      return (
        <Layout>
        <Route exact path='/home' component={Home} />

        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/locations' component={LocationList} />
        <Route exact path='/locations/edit' component={LocationEditForm} />
  
        <Route exact path='/routes' component={RouteList} />
        <Route path='/routes/edit' component={RouteEditForm} />
        
      </Layout>
      );
    }
  }