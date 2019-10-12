import { getMembers } from '../data';
import { MEMBERS_LOADED } from './action-types';

export const loadMembers = () => dispatch => {
  getMembers().then(data => {
    const members = data.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.id]: curr,
      }),
      {}
    );
    dispatch({
      type: MEMBERS_LOADED,
      payload: members,
    })  
  });
}
