import * as data from '../data';
import { loadMembers } from './members';
import { MEMBERS_LOADED } from './action-types';

const members = [
  {
    "id": "1",
    "firstName": "Martin",
    "lastName": "Bradley",
    "email": "mbradley0@google.it",
    "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    "ip": "166.124.172.160"
  },
  {
    "id": "2",
    "firstName": "Helen",
    "lastName": "Hawkins",
    "email": "hhawkins1@posterous.com",
    "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
    "ip": "179.239.189.173"
  },
  {
    "id": "3",
    "firstName": "Denise",
    "lastName": "Sanders",
    "email": "dsanders2@ox.ac.uk",
    "avatar": "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
    "ip": "184.19.42.78"
  },
];

it('should dispatch action properly with sorted data', async () => {
  const spy = jest.spyOn(data, 'getMembers')
    .mockImplementation(() => new Promise(resolve => resolve(members)));

  const dispatch = jest.fn();
  const action = loadMembers();

  await action(dispatch);

  expect(dispatch).toHaveBeenCalled();
  expect(dispatch).toHaveBeenCalledWith({
    type: MEMBERS_LOADED,
    payload: {
      "1": members[0],
      "2": members[1],
      "3": members[2]
    }
  });
});