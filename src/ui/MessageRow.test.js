import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

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
    },
    onMouseEnter: jest.fn(),
  };

  const tree = renderer.create(<MessageRow {...props} />);

  const trTag = tree.root.findAllByType('tr')[0];

  trTag.props.onMouseEnter();

  expect(props.onMouseEnter).toHaveBeenCalled();
  expect(props.onMouseEnter).toHaveBeenCalledWith(props.messageItem.id);
});
