import { getMessages } from '../data';
import { MESSAGES_LOADED } from './action-types';

export const loadMessages = () => dispatch =>
  getMessages().then(data => {
    data.sort((a,b) => {
      return new Date(b.timestamp) - new Date(a.timestamp);
    });

    dispatch({
      type: MESSAGES_LOADED,
      payload: data,
    })
  });
