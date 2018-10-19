import initialState from './initialState';
import * as types from './actionTypes';

export default function regMemberReducer(state = initialState.regMember, action) {
  if(action.type === types.INPUT_REG_MEMBER){
    let newState = state.concat(action.newMember);
    return newState;
  }
  else if(action.type === types.RESET_REG_MEMBER){
    let newState = initialState.regMember;
    return newState;
  }
  return state;
}
