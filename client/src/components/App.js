import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';
import Landing from './landing/Landing';
import Register from './registration_and_login/Register';
import Login from './registration_and_login/Login';
import ProfileInput from './profile/ProfileInput';
import EditProfile from './profile/EditProfile';
import { Provider } from 'react-redux';
import store from '../store';
import { Layout } from './Layout';
import Alert from './Alert';
import Dashboard from './dashboard/Dashboard';
import PrivateRoute from './routing/PrivateRoute';
import { loadUser } from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';


if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <TopNavbar />
        <Layout>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <Alert />
          <Switch>
            {
              <Route
                exact path='/'
                component={Landing}
              />
            }
            {
              <Route
                exact path='/register'
                component={Register}
              />
            }
            {
              <Route
                exact path='/login'
                component={Login}
              />
            }
            {
              <PrivateRoute
                exact path='/dashboard'
                component={Dashboard}
              />
            }
            {
              <PrivateRoute
                exact path='/create-profile'
                component={ProfileInput}
              />
            }
            {
              <PrivateRoute
                exact path='/edit-profile'
                component={EditProfile}
              />
            }
          </Switch>
        </Layout>
        <BottomNavbar />
      </Router>
    </Provider>
  );
};

export default App;
