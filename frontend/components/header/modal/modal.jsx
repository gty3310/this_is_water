import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../../actions/modal_actions';

import LogInFormContainer from '../session_form/login_form_container';
import SignUpFormContainer from '../session_form/signup_form_container';

function Modal({ modal, closeModal, demoLogin }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LogInFormContainer></LogInFormContainer>;
      break;
    case 'signup':
      component = <SignUpFormContainer></SignUpFormContainer>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
            {component}
        </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
