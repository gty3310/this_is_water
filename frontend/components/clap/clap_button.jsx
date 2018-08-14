import React from 'react';
import { connect } from 'react-redux';

import { createClap } from '../../actions/clap_actions';

class ClapButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clappable_type: this.props.type,
      clappable_id: this.props.content.id,
      clap_count: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.addToCount = this.addToCount.bind(this);
  }

  addToCount() {
    clearTimeout(this.addOne);

    this.setState( { clap_count: this.state.clap_count + 1 }, () => {
      if (this.props.type === "Response") {
        this.handleChange();
      } else {
        this.addOne = setTimeout(this.handleChange, 1000);
      }
    });
  }

  handleChange() {
    this.props.createClap(this.state).then(
      success => this.setState( { clap_count: 0 })
    );
  }

  render () {
    let hide='';
    let show='';

    if (this.props.type === "Response") {
      hide = 'hide';
      show = 'show';
    }

    return (
      <div className="clap-container">
        <p className={"clap-count" + hide}>
          + {this.state.clap_count}
        </p>

      <button className="clap-button"
        onClick={this.addToCount}>
        <img src={window.clap_button} alt="clapButtonImg"></img>
      </button>

      <p className={"clap-total" + show}>
        {this.props.content.totalClaps}
      </p>

    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createClap: clapData => dispatch(createClap(clapData))
  };
};

export default connect(
  null, mapDispatchToProps
)(ClapButton);
