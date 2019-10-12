import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadMessages } from '../action-creators/messages';
import { loadMembers } from '../action-creators/members';
import MessageRow from '../ui/MessageRow';
import PLACEHOLDER from '../assets/placeholder.png';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadMessages();
    this.props.loadMembers();
  }

  state = {
    id: '',
  }

  handleMouseEnter = id => {
    this.setState({
      id,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      id: '',
    });
  }

  render() {
    if (!this.props.messages || !Array.isArray(this.props.messages)) {
      return null;
    }

    return (
      <table
        className="table table-bordered table-hover"
        onMouseLeave={this.handleMouseLeave}
      >
        <tbody>
          {
            this.props.messages.map(item => {
              item.imgSrc = this.props.members[item.userId] && this.props.members[item.userId].avatar
                ? this.props.members[item.userId].avatar
                : PLACEHOLDER;
              
              item.userEmail =  this.props.members[item.userId] && this.props.members[item.userId].email
                ? this.props.members[item.userId].email
                : '';

              return (
                <MessageRow
                  messageItem={item}
                  key={item.id}
                  onMouseEnter={this.handleMouseEnter}
                  showEmail={this.state.id === item.id}
                />
              );
            })
          }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  members: state.members,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadMessages, loadMembers }, dispatch);

Home.propTypes = {
  loadMessages: PropTypes.func,
  loadMembers: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
