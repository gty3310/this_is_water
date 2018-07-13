import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import { receiveErrors,login } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

import SessionForm from './session_form';


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
      <button className="alternateForm-button" onClick={() => dispatch(openModal('signup'))}>Create an account instead.</button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);