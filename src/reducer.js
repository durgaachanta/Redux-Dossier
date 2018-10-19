import { combineReducers } from 'redux';
import test from './testReducer';
import regMember from './regMemberReducer';
import MemberList from './MemberListReducer';

const rootReducer = combineReducers({
  test,
  regMember,
  MemberList,

});
export default rootReducer;
