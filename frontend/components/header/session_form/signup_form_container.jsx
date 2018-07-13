import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { receiveErrors, login } from '../../../actions/session_actions';


const mapStateToProps = ({ ui: {errors} }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    processForm: user => dispatch(signup(user)),
    otherForm: (
      <button className="alternateForm-button" onClick={() => dispatch(openModal('login'))}>Sign in instead.</button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
