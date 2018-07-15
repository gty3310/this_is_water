import React from 'react';
import { Route, Swtich } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import StoryNewContainer from './story/story_new_container';
import StoryShowContainer from './story/story_show_container';
import Homepage from './homepage';

const MainPage = () => {
  return (
    <div className="mainpage">
      <Switch>
        <ProtectedRoute path='/stories/new' component={StoryNewContainer}></ProtectedRoute>
        <ProtectedRoute path='/stories/:id' component={StoryShowContainer}></ProtectedRoute>
        <Route path='/' component={HomePage}></Route>
      </Switch>
    </div>
  );
};





// import SignUpFormContainer from './header/session_form/signup_form_container';
// import LogInFormContainer from './header/session_form/login_form_container';
// import UserShowContainer from './user/user_show_container';
// import StoryUpdateContainer from './story/story_update_container';


// <AuthRoute exact path="/login" component={LogInFormContainer} />
// <AuthRoute exact path="/signup" component={SignUpFormContainer} />

// <Switch>
//   <Route component={UserShowContainer} path="/users/:id" />
//   <Route exact path="/stories/new" component={StoryNewContainer} />
//   <Route exact path="/stories/:id" component={StoryShowContainer} />
//   <Route exact path="/stories/update/:id" component={StoryUpdateContainer} />
// </Switch>
