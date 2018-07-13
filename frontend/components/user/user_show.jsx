import React from 'react';
import { withrouter } from 'react-router';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);

    // this.loadingScreen = this.loadingScreen.bind(this);
  }

  // loadingScreen() {
  //
  //   setTimeout(
  //     () => {
  //       return <div>Content Loading</div>;
  //     }, 5000
  //   );
  // }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getUser(this.props.match.params.id);
  }

  handleUpdate(id) {
    this.props.history.push(`/stories/update/${id}`);
  }

  render() {
    const monthLong = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "Octtober", "November", "December"
    ];

    return (
      <div className="profile-container">
        <div className="profile-header">
          <h1 className="profile-username">{this.props.user.username}</h1>
          <p className="profile-joinDate">
            Member since {monthLong[this.props.user.month-1]} {this.props.user.year}
          </p>
        </div>
        <img className="profile-picture" src={this.props.user.image_url} alt="Image_url"></img>
      </div>
    );

  }




}

export default UserShow;

// const monthShort = [
//   "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// ];
// const monthLong = [
//   "January", "February", "March", "April", "May", "June", "July", "August", "September", "Octtober", "November", "December"
// ];



// if (!!this.props.user && !!this.props.user.stories) {
//   let id = this.props.currentUser ? this.props.currentUser.id : 0;
//
//   const stories = this.props.user.stories.map((story, idx) => {
//
//     const update = (storyId) => {
//       if (id === story.author_id) {
//         return (
//           <input className="profile-storyUpdate-button"
//             type="submit"
//             value="Update"
//             onClick={this.handleUpdate(storyId)}></input>
//         );
//       } else {
//         return (<div></div>);
//       }
//     };
//     return (
//       <div className="profile-story-container" key={story.id}>
//
//         <div className="profile-storyUpdate-container">
//
//           {update(story.id)}
//
//           <div className="profile-storyAuthor-container">
//
//             <Link to={`/users/${this.props.user.id}`}>
//               <img className="profile-storyAuthor-avatar" src={this.props.user.image_url} alt="User ImageUrl"></img>
//             </Link>
//
//             <div className="profile-storyAuthor-info">
//               <Link to={`/users/${this.props.user.id}`}>
//                 <p className="profile-storyAuthor-username">
//                   {this.props.username}
//                 </p>
//               </Link>
//
//               <p className="profile-story-date">
//                 {monthShort[story.month - 1]} {story.day}
//               </p>
//             </div>
//
//           </div>
//
//         </div>
//
//         <Link to={`/stories/${story.id}`}>
//           <img className="profile-story-image" src={story.image_url} alt="Story ImageUrl"></img>
//         </Link>
//
//         <Link to={`/stories/${story.id}`}>
//           <p className="profile-story-title">
//             {story.title}
//           </p>
//         </Link>
//
//       </div>
//     );
//   });
//   return (
//     <div className="profile">
//       <div className="profile-header">
//         <h1 className="profile-name">{this.props.user.username}</h1>
//         <p className="date-created">
//           Member since {monthLong[this.props.user.month-1]} {this.props.user.year}
//         </p>
//       </div>
//       <img className="profile-picture" src={this.props.user.image_url} alt="Image_url"></img>
//     </div>
//   );
// } else if (!!this.props.user) {
//   return (
//     <div className="profile">
//       <div className="profile-header">
//         <h1 className="profile-name">{this.props.user.username}</h1>
//         <p className="date-created">
//           Member since {monthLong[this.props.user.month-1]} {this.props.user.year}
//         </p>
//       </div>
//       <img className="profile-picture" src={this.props.user.image_url} alt="Image_url"></img>
//     </div>
//   );
// } else {
//   return (
//     <div>Content Loading</div>
//   );
// }
// }
