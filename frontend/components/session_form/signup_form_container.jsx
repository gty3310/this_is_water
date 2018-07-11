import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button className="form-switch" onClick={() => dispatch(openModal('login'))}>Already have an account? Sign in.</button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

// navLink: <Link to="/login">log in instead</Link>,
// demoLogin: () => {
//   dispatch(login({ email: 'guest@thisiswater.com', password: 'password'}));
// }
