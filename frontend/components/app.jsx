import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import Header from './header/header';
import MainPage from './mainpage';



const App = () => (
  <div>
    <Header></Header>
    <MainPage></MainPage>
  </div>
);

export default App;
