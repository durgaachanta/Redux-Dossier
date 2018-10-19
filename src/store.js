/* A redux application only needs one store
   install redux, react-redux and redux-thunk to setup redux store
   We configure the redux store here
   This file is only for configure and set up
   To access the redux store - we need to add a <provider> @ the app's entry point
   By placing it there all the components in the app can use it. Provider takes store and children as props
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
//composeWithDevTools from 'redux-devtools-extension is the one which make redux visible in the browser'

export default function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))

  );
}
