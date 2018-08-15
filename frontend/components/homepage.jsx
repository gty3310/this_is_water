import React from 'react';
import { connect } from 'react-redux';
import { fetchAllStories } from '../actions/story_actions';
import MainIndex from './main_content/main_index';
import LoadingScreen from './loading_screen';

class HomePage extends React.Component {
  // state = { loading: true };

  componentDidMount () {
    this.props.fetchAllStories () ;
  }

  // if (this.state.loading) {
  //   return <LoadingScreen></LoadingScreen>;
  // }
  render () {

    return (
      <div className = "homepage">
        <MainIndex stories={this.props.stories}></MainIndex>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stories: Object.values(state.entities.stories)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllStories: () => dispatch(fetchAllStories())
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(HomePage);
