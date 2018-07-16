import React from 'react';
import { withRouter } from 'react-router-dom';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.story;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const story = Object.assign({}, this.state);

    this.props.submitAction(story).then(
      success => this.props.history.push('/'),
      failure => console.log(failure)
    );
  }

  render() {
    const currentUser = this.props.currentUser;

    return (
      <div className="story-form-container">

        <div className="story-form-author-container">

          <img className="header-image" src={currentUser.image_url} alt="current_user_avatar"></img>

          <div className="story-form-author-info">
            <p className="story-form-author-username">{currentUser.username}</p>
            <p className="story-form-author-draft">Draft</p>
          </div>

        </div>

        <form className="story-form" onSubmit={this.handleSubmit}>

          <input className="story-form-title"
            type="text"
            value={this.state.title}
            onChange={this.update('title')}
            placeholder="Title"
          ></input>

          <input className="story-form-header"
            type="text"
            value={this.state.header}
            onChange={this.update('header')}
            placeholder="Header"
          ></input>

          <input className="story-form-body"
            type="text"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="Body"
          ></input>

          <input className="story-form-button"
            type="submit"
            value={this.props.type}
          ></input>

        </form>

      </div>
    );
  }
}

export default withRouter(StoryForm);

// <form className="story-form" onSubmit={this.handleSubmit}>
//
//   <input className="story-form-title">
//     type="text"
//     value={this.state.title}
//     onChange={this.update('title')}
//     placeholder="Title"
//   </input>
//
//   <input className="story-form-header">
//     type="text"
//     value={this.state.header}
//     onChange={this.update('header')}
//     placeholder="Header"
//   </input>
//
//   <input className="story-form-body">
//     type="text"
//     value={this.state.body}
//     onChange={this.update('body')}
//     placeholder="Body"
//   </input>
//
//   <input className="story-form-button">
//     type="submit"
//     value={this.props.type}
//   </input>
//
// </form>
