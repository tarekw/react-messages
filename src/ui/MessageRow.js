import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';

const MessageRow = ({ messageItem={} }) =>
  <tr>
      <td>
        <img
          className="img-rounded"
          src={messageItem.imgSrc}
          style={{width:100, height:100}}
          alt=""
        />
      </td>
      <td>
          <div>{messageItem.message}</div>
          <div>{moment(messageItem.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</div>
      </td>
  </tr>

MessageRow.propTypes = {
    messageItem: PropTypes.object
}

export default MessageRow
