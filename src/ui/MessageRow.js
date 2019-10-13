import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const MessageRow = ({ messageItem={}, onMouseEnter=f=>f, showEmail=false }) => (
  <tr onMouseEnter={() => onMouseEnter(messageItem.id)}>
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
        showEmail ?
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

MessageRow.propTypes = {
    messageItem: PropTypes.object
}

export default MessageRow
