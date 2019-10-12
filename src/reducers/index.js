import { combineReducers } from 'redux';
// import messages from './messages';
import { MESSAGES_LOADED, MEMBERS_LOADED } from '../action-creators/action-types';

export const messages = (state=[], action) => {
  switch(action.type) {
  case MESSAGES_LOADED:
      return action.payload;
  default:
      return state;
  }
};

export const members = (state={}, action) => {
  switch(action.type) {
      case MEMBERS_LOADED:
          return action.payload;
      default:
          return state;
  }
}

export default combineReducers({
  messages,
  members,
});
