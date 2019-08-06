import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { LoginForm } from './components/login/LoginForm';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route path="/dashboard" component={App} />
    </Switch>
  </BrowserRouter>,
  rootElement);

registerServiceWorker();
