import { messages, members } from './index';
import { MESSAGES_LOADED, MEMBERS_LOADED } from '../action-creators/action-types';

it('messages should return correct state by detault', () => {
    expect(messages([], {})).toEqual([]);
});

it('messages should return correct state when loaded', () => {
    const action = {
        type: MESSAGES_LOADED,
        payload: ['1', '2', '3'],
    }
    expect(messages([], action)).toEqual(action.payload);
});

it('members should return correct state by detault', () => {
    expect(members({}, {})).toEqual({});
});

it('members should return correct state when loaded', () => {
    const action = {
        type: MEMBERS_LOADED,
        payload: {'1': '1', '2': '2', '3': '3'},
    }
    expect(members([], action)).toEqual(action.payload);
});
