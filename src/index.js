import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
//Provider allows the app to access redux store

//react-router-dom tries to sync the page with the appropiate url
//There are two types of routers we can use -BrowserRouter - HashRouter
//BrowserRouter is used when we are tying to render dynamic data
//HashRouter is used when we are tying to render static data
//Router component can only have one child - it's main job is to create a history object to keep track of location

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './main.scss';

ReactDOM.render((
 <Provider store={configureStore()}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
  ), document.getElementById('root'));
registerServiceWorker();
