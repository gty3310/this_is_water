import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';



const mapStateToProps = ({ ui: {errors} }) => {
  return {
    errors: errors.session,
    formType: 'login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button className="form-switch" onClick={() => dispatch(openModal('signup'))}>No account? Create one.</button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

// navLink: <Link to="/signup">sign up instead</Link>,

// demoLogin: () => {
//   dispatch(login({ email: 'guest@thisiswater.com', password: 'password'}));
// }