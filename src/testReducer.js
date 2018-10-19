import initialState from './initialState';
import * as types from './actionTypes';

export default function testReducer(state = initialState.test, action) {
  if(action.type === types.TEST){
    state = "Durga Learned how to use redux";
    return state;
  }
  return state;
}
