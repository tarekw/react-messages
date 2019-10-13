import React from 'react';
import { shallow } from 'enzyme';

import Home from './home';

it('renders correctly', () => {
  const props = {
    messages: [],
    loadMessages: () => {},
    loadMembers: () => {},
  };
  const tree = shallow(<Home.WrappedComponent {...props} />);
  expect(tree).toMatchSnapshot();
});

it('renders correctly when messages loaded', () => {
  const props = {
    messages: [
      {
        "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
        "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
        "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "timestamp": "2017-02-09T04:27:38Z"
      },
      {
        "id": "b03569ae-ccbf-4975-8040-4daba638b407",
        "userId": "16373df5-da0a-4074-8295-f916b94269f4",
        "message": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
        "timestamp": "2016-11-09T05:04:58Z"
      },
      {
        "id": "3a59859e-33f1-4c2b-a636-1f119c484dc8",
        "userId": "976c4919-a8b4-4807-bebb-84ca8448be32",
        "message": "Suspendisse potenti.",
        "timestamp": "2016-06-03T20:24:29Z"
      },
    ],
    members: {},
    loadMessages: () => {},
    loadMembers: () => {},
  };
  const tree = shallow(<Home.WrappedComponent {...props} />);
  expect(tree).toMatchSnapshot();
});

it('renders correctly when messages and members loaded', () => {
  const props = {
    messages: [
      {
        "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
        "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
        "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "timestamp": "2017-02-09T04:27:38Z"
      },
      {
        "id": "b03569ae-ccbf-4975-8040-4daba638b407",
        "userId": "16373df5-da0a-4074-8295-f916b94269f4",
        "message": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
        "timestamp": "2016-11-09T05:04:58Z"
      },
      {
        "id": "3a59859e-33f1-4c2b-a636-1f119c484dc8",
        "userId": "976c4919-a8b4-4807-bebb-84ca8448be32",
        "message": "Suspendisse potenti.",
        "timestamp": "2016-06-03T20:24:29Z"
      },
    ],
    members: {
      'fe27b760-a915-475c-80bb-7cdf14cc6ef3': {
        id: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
        firstName: 'Albert',
        lastName: 'Rose',
        email: 'arosec@bbb.org',
        avatar: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
        ip: '20.79.231.223'
      },
      '16373df5-da0a-4074-8295-f916b94269f4': {
        id: '16373df5-da0a-4074-8295-f916b94269f4',
        firstName: 'Larry',
        lastName: 'Owens',
        email: 'lowensm@earthlink.net',
        avatar: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
        ip: '168.43.167.194'
      },
      '976c4919-a8b4-4807-bebb-84ca8448be32': {
        id: '976c4919-a8b4-4807-bebb-84ca8448be32',
        firstName: 'Peter',
        lastName: 'Howard',
        email: 'phoward12@chronoengine.com',
        avatar: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
        ip: '119.0.16.19'
      }
    },
    loadMessages: () => {},
    loadMembers: () => {},
  };
  const tree = shallow(<Home.WrappedComponent {...props} />);
  expect(tree).toMatchSnapshot();
});

it('should fetch messages and members data on load', () => {
  const props = {
    messages: [],
    loadMessages: jest.fn(),
    loadMembers: jest.fn(),
  };

  shallow(<Home.WrappedComponent {...props} />);

  expect(props.loadMessages).toHaveBeenCalled();
  expect(props.loadMembers).toHaveBeenCalled();
});
