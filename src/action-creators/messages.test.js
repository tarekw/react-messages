import * as data from '../data';
import { loadMessages } from './messages';
import { MESSAGES_LOADED } from './action-types';

const messages = [
  {
    "id": "1",
    "userId": "1",
    "message": "message 1",
    "timestamp": "2016-06-03T20:24:29Z"
  },
  {
    "id": "2",
    "userId": "2",
    "message": "message 2",
    "timestamp": "2016-11-09T05:04:58Z"
  },
  {
    "id": "3",
    "userId": "3",
    "message": "message 3",
    "timestamp": "2017-02-09T04:27:38Z"
  },
];

it('should dispatch action properly with sorted data', async () => {
  const spy = jest.spyOn(data, 'getMessages')
    .mockImplementation(() => new Promise(resolve => resolve(messages)));

  const dispatch = jest.fn();
  const action = loadMessages();

  await action(dispatch);

  expect(dispatch).toHaveBeenCalled();
  expect(dispatch).toHaveBeenCalledWith({
    type: MESSAGES_LOADED,
    payload: [
      {
        "id": "3",
        "userId": "3",
        "message": "message 3",
        "timestamp": "2017-02-09T04:27:38Z"
      },
      {
        "id": "2",
        "userId": "2",
        "message": "message 2",
        "timestamp": "2016-11-09T05:04:58Z"
      },
      {
        "id": "1",
        "userId": "1",
        "message": "message 1",
        "timestamp": "2016-06-03T20:24:29Z"
      },
    ],
  });
});