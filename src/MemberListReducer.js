import * as types from './actionTypes';
import initialState from './initialState';


export default function MemberListReducer(state = initialState.MemberList, action) {
  let newState = {};
  // let member = action.member;
  // let item = action.item;
  if(action.type === types.INPUT_ITEM_TO_MEMBER) {

    newState['member'] = action.member;
    newState['item'] = action.item;
    return state.concat(newState);
  }
  else if(action.type === types.INPUT_ITEM_TO_MEMBER_RESET) {
    newState = initialState.MemberList;
    return newState;

  }
  return state;

}
