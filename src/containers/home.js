import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadMessages } from '../action-creators/messages';
import { loadMembers } from '../action-creators/members';
import MessageRow from '../ui/MessageRow';
import PLACEHOLDER from '../assets/placeholder.png';

const Home = ({ loadMessages=f=>f, loadMembers=f=>f, messages=[], members={} }) => {
  useEffect(() => {
    loadMessages();
    loadMembers();
  }, []);

  return (
    <table className='table table-bordered table-hover'>
      <tbody>
        {
          messages.map(item => {
            item.imgSrc = members[item.userId] && members[item.userId].avatar
              ? members[item.userId].avatar
              : PLACEHOLDER;
            
            item.userEmail =  members[item.userId] && members[item.userId].email
              ? members[item.userId].email
              : '';

            return (
              <MessageRow
                messageItem={item}
                key={item.id}
              />
            );
          })
        }
      </tbody>
    </table>
  );
}

const mapStateToProps = state => ({
  messages: state.messages,
  members: state.members,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadMessages, loadMembers }, dispatch);

Home.propTypes = {
  loadMessages: PropTypes.func,
  loadMembers: PropTypes.func,
  messages: PropTypes.array,
  members: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
