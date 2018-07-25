import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './app';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import reduxThunk from 'redux-thunk';
import CarDetailPage from "./pages/CarDetailPage/CarDetailPage";
import RoutesService from "./RoutesService";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const Routes = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path={RoutesService.rootPath()} component={App}/>
        <Route exact path={RoutesService.vinPath(':vin')} component={CarDetailPage}/>
      </div>
    </Router>
  </Provider>
);

export default Routes;
