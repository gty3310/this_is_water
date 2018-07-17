import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import CreateStoryContainer from './story/create_story_container';
import ShowStoryContainer from './story/show_story_container';
import UserShowContainer from './user/user_show_container';
import HomePage from './homepage';

const MainPage = () => {
  return (
    <div className="mainpage">
      <Switch>
        <ProtectedRoute path='/stories/new' component={CreateStoryContainer}></ProtectedRoute>
        <ProtectedRoute path='/stories/:id' component={ShowStoryContainer}></ProtectedRoute>
        <ProtectedRoute path='/users/:id' component={UserShowContainer}></ProtectedRoute>
        <Route path='/' component={HomePage}></Route>
      </Switch>
    </div>
  );
};

export default MainPage;




// import SignUpFormContainer from './header/session_form/signup_form_container';
// import LogInFormContainer from './header/session_form/login_form_container';
// import UserShowContainer from './user/user_show_container';
// import StoryUpdateContainer from './story/story_update_container';


// <AuthRoute exact path="/login" component={LogInFormContainer} />
// <AuthRoute exact path="/signup" component={SignUpFormContainer} />

// <Switch>
//   <Route component={UserShowContainer} path="/users/:id" />
//   <Route exact path="/stories/new" component={CreateStoryContainer} />
//   <Route exact path="/stories/:id" component={StoryShowContainer} />
//   <Route exact path="/stories/update/:id" component={StoryUpdateContainer} />
// </Switch>
