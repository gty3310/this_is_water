# This Is Water

## About

"ThisIsWater" is a full-stack single-page web application inspired by the story-sharing platform "Medium". ThisIsWater is built using Rails/PostgreSQL on the backend and React.js/Redux on the frontend. ThisIsWater allows users to follow one another, scroll through customized feeds, and publicly share stories that can be interacted with.

Access the live site [here](http://thisiswater.herokuapp.com/
).

## Demo

<img src="EMPTY PUT STUFF HERE" height="400" alt="thisiswater-gif">

## Architecture and Technologies

The project is implemented with the following technologies:

- `React.js` for updating and rendering proper components
- `Redux` for maintaining predictable state
- `jQuery` for making AJAX calls to fetch information from the backend
- `JavaScript ES6` for enhancing components
- `HTML5` for formatting
- `CSS3` for styling components
- `Ruby on Rails` for generating migrations, creating models with validations, associations and methods, controllers for proper routing and rendering of views
- `PostgreSQL` for database management
- `Amazon Web Services` for remote storage
- `JSON/JBuilder` for rendering JSON objects out of ruby instances to be sent to the front end
- `Webpack4` to bundle js files


## Features

Some feature highlights of the app are:

1. Authentication and Authorization
2. Live Demo Login
3. Main Feed
4. Stories
5. Responses
6. Claps
7. Follows
8. Profile
9. Error Handling


### Authentication and Authorization

<img src="empty_image" height="400" alt="Signup Modal">

Users can sign up and log into ThisIsWater with a modal.  Through the use of protected routes, ThisIsWater reveals
a login modal whenever an unauthorized user attempts to use the site.  

```
  // from main.js
```

### Live Demo Login

<img src="empty_image" height="400" alt="gif of demo login">

ThisIsWater includes a guest account and live login

```
  // from main.js

```


### Main Feed

<img src="empty_image" height="400" alt="Main Feed">


Users can see a list of all stories on the site.  

```
  // from main.js

```


### Stories

<img src="empty_image" height="400" alt="Story Show">

Users can write and read stories containing images that are stored in AWS s3 cloud through Rails Active Storage

```
  // from main.js

```

### Responses

<img src="empty_image" height="400" alt="Gif of writing a response">

Users can respond to stories they find interesting.  

```
  // from main.js

```

### Claps

<img src="empty_image" height="400" alt="Gif of clapping">

If a user likes a story or response, they can clap for it.  

```
  // from main.js

```

### Follows

<img src="empty_image" height="400" alt="Image of Follow Button">

If a user finds an author they like, they can follow that author.  

```
  // from main.js

```

### Profile

<img src="empty_image" height="400" alt="User Show">

Each user has a profile displaying key information about the user along with their authored stories.  

```
  // from main.js

```

### Error Handling

<img src="empty_image" height="400" alt="Image of Errors">

Errors display during authentication to indicate missing or invalid submissions

```
  // from main.js

```


## Future Features
In the future, I plan to add the following features:

* User can update and delete their responses, stories and user information
* Bookmarks and Tags
* Loading screen
* Mobile Friendly
* Generate stories through AJAX requests to real story APIs
* Popular, featured and recommended under main feed
* Rich text editing through Quill Rich Text Editor
* Ability to search stories and users through PG Search
* Infinite Scroll
