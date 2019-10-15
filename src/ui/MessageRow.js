import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const MessageRow = ({ messageItem={} }) => {
  const [id, setId] = useState('');

  const handleMouseEnter = () => {
    setId(messageItem.id);
  }

  const handleMouseLeave = () => {
    setId('');
  }

  return (
    <tr
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <td>
        <img
          className="img-rounded"
          src={messageItem.imgSrc}
          style={{width:100, height:100}}
          alt=""
        />
      </td>
      <td>
        {
          id === messageItem.id ?
            <div>{messageItem.userEmail}</div>
          :
            <div>
              <div>{messageItem.message}</div>
              <div>{moment(messageItem.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</div>
            </div>
        }
      </td>
    </tr>
  );
}

MessageRow.propTypes = {
    messageItem: PropTypes.object
}

export default MessageRow
