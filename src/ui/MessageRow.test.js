import React from 'react';
import { shallow } from 'enzyme';
import renderer, { act } from 'react-test-renderer';

import MessageRow from './MessageRow';

jest.mock('moment', () => () => ({format: () => '2019–09–13T12:00:00+00:00'}));

it('renders correctly', () => {
  const props = {
    messagesItem: {},
  };
  const tree = shallow(<MessageRow {...props} />);
  expect(tree).toMatchSnapshot();
});

it('should handle mouse enter event', () => {
  const props = {
    messageItem: {
        id: '1',
        userEmail: 'my@email.com',
        message: 'a message from this user',
        timestamp: 'time',
        imgSrc: 'http://avatar.image.com'
    },
  };

  let tree;
  
  act(() => {
    tree = renderer.create(<MessageRow {...props} />);
  });

  expect(tree).toMatchSnapshot();

  const trTag = tree.root.findAllByType('tr')[0];

  act(() => trTag.props.onMouseEnter('1'));

  expect(tree).toMatchSnapshot();
});

it('should handle mouse leave event', () => {
  const props = {
    messageItem: {
        id: '1',
        userEmail: 'my@email.com',
        message: 'a message from this user',
        timestamp: 'time',
        imgSrc: 'http://avatar.image.com'
    },
  };

  let tree;
  
  act(() => {
    tree = renderer.create(<MessageRow {...props} />);
  });

  const trTag = tree.root.findAllByType('tr')[0];

  act(() => trTag.props.onMouseEnter('1'));  
  expect(tree).toMatchSnapshot();
  
  act(() => trTag.props.onMouseLeave());
  expect(tree).toMatchSnapshot();
});
