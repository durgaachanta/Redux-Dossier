import * as types from './actionTypes';

export function test() {
  return function (dispatch){
    dispatch({ type: types.TEST});
  }
}

export function addRegMember(newMember) {
  return function (dispatch) {
    dispatch({ type: types.INPUT_REG_MEMBER, newMember});
  }
}

export function resetRegMembers() {
  return function (dispatch) {
    dispatch({ type: types.RESET_REG_MEMBER });
  }

}

export function addItemToMember(member, item) {
  return function (dispatch) {
    dispatch({ type: types.INPUT_ITEM_TO_MEMBER, member, item});
  }
}

export function resetMemberList() {
  return function (dispatch) {
    dispatch({ type: types.INPUT_ITEM_TO_MEMBER_RESET});
  }
}
