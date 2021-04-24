import { createStore, applyMiddleware } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers';

//For development only
// import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
  // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;