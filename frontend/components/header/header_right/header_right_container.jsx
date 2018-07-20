import { connect } from 'react-redux';

import { logout, demoLogin } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

import HeaderRight from './header_right';

const mapStateToProps = ({ ui: {session}, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  demoLogin: () => {
    dispatch(openModal('login'));
    window.setTimeout(() => {
      dispatch(demoLogin());
      dispatch(closeModal());
    }, 1000);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderRight);
