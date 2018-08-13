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


At the centerpiece of Profound Sound is a recursively rendered binary tree in Canvas, which begins with a single branch length and grows until the deepest branches (those with length < 10) are filled with leaves.  

```
  // from tree.js
```

### Live Demo Login

<img src="empty_image" height="400" alt="gif of demo login">


In order to extract data from its audio file, Profound Sound integrates with Web Audio API.  In the following code snippet we create a media element source and an audio analyzer.  We then proceed to connect the two and create an array of unsigned integers from the frequencyBinCount of the analyzer, which will later be used for visualizations.  

```
  // from main.js

```


### Main Feed

<img src="empty_image" height="400" alt="Main Feed">


To render the dancing sun using canvas, we take the first element the array of unsigned integers from our frequencyData and pass that into an draw function as the parameter for the radius of our sun.  Since we need to clear the canvas upon each re-rendering, we're forced to set the animation on a separate canvas element.  We're also able to dynamically set the hue of the sun.  

```
  // from main.js

```


### Stories

<img src="empty_image" height="400" alt="Story Show">

To render the dancing grass we pull a scalable vector graph from the D3 library and pass in our frequency data.  We're able to constantly re-render the chart using request animation frame from Canvas.  The color also adjusts dynamically based on the height of each rectangle in the chart.  

```
  // from main.js

```

### Responses

<img src="empty_image" height="400" alt="Gif of writing a response">

To render the dancing grass we pull a scalable vector graph from the D3 library and pass in our frequency data.  We're able to constantly re-render the chart using request animation frame from Canvas.  The color also adjusts dynamically based on the height of each rectangle in the chart.  

```
  // from main.js

```

### Claps

<img src="empty_image" height="400" alt="Gif of clapping">

To render the dancing grass we pull a scalable vector graph from the D3 library and pass in our frequency data.  We're able to constantly re-render the chart using request animation frame from Canvas.  The color also adjusts dynamically based on the height of each rectangle in the chart.  

```
  // from main.js

```

### Follows

<img src="empty_image" height="400" alt="Image of Follow Button">

To render the dancing grass we pull a scalable vector graph from the D3 library and pass in our frequency data.  We're able to constantly re-render the chart using request animation frame from Canvas.  The color also adjusts dynamically based on the height of each rectangle in the chart.  

```
  // from main.js

```

### Profile

<img src="empty_image" height="400" alt="User Show">

To render the dancing grass we pull a scalable vector graph from the D3 library and pass in our frequency data.  We're able to constantly re-render the chart using request animation frame from Canvas.  The color also adjusts dynamically based on the height of each rectangle in the chart.  

```
  // from main.js

```

### Error Handling

<img src="empty_image" height="400" alt="Image of Errors">

To render the dancing grass we pull a scalable vector graph from the D3 library and pass in our frequency data.  We're able to constantly re-render the chart using request animation frame from Canvas.  The color also adjusts dynamically based on the height of each rectangle in the chart.  

```
  // from main.js

```


## Future Features
In the future, I plan to add the following features:

* User may add their own songs
* User may adjust the colors of the tree, the sun and the grass
