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

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import UserShowContainer from './user/user_show_container';
import StoryShowContainer from './story/story_show_container';
import StoryNewContainer from './story/story_new_container';
import StoryUpdateContainer from './story/story_update_container';

import Modal from './modal/modal';
import Header from './header/header';



const App = () => (
  <div>

    <Header></Header>


    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route component={UserShowContainer} path="/users/:id" />
      <Route exact path="/stories/new" component={StoryNewContainer} />
      <Route exact path="/stories/:id" component={StoryShowContainer} />
      <Route exact path="/stories/update/:id" component={StoryUpdateContainer} />
    </Switch>
  </div>
);

// <Route exact path="/users/:id" component={UserShowContainer} />
export default App;

// <Redirect to="/" />


// <header>
//   <Link to="/" className="header-link">
//     <h1>ThisIsWater</h1>
//   </Link>
//   <GreetingContainer />
// </header>
