# AniColors

Hi!

The aim of this Web App is to provide the user an easy way to see how other animals see the world.

AniColor's main feature is to get random images from a third-party API and to allow users to choose among four animals and view how each of them would see each image. When the user clicks on an animal icon, a specific CSS filter combination modifies the image, replicating a verisimilar visual perception of the selected animal.

For the moment, AniColors is a front-end-only project.

## Setup

Clone the project:

```bash
  git clone https://github.com/tatimutter/AniColors.git
```

Go to the project directory:

```bash
  cd AniColors
```

Install dependencies:

```bash
  npm install
```

Start the server in development mode with hot reloading in port 3000:

```bash
  npm run start
```

## External API Prep

- Go to Pixabay website <https://pixabay.com> and log on to get your API Key.

- Add a `.env` file to the project directory containing your Pixabay API Key:
  - REACT_APP_API_KEY=yourKey

## Technologies

React, React Routes, Bootstrap 5

## Features

The SPA has four components/routes: Home, Action, About, and ErrorPage (for wrong URLs).
Home, Action and About will be seen by the user as three actual different pages. They can be accessed through their links in the navbar (Action's link is 'LOOK' in the navbar).

Home, About and ErrorPage are styled in App.css. Action.js has its own dedicated .css file.

In the Action route the user will see a default image (Pablita the jumping spider) with an instruction message and a box containing four non-human-animal (NHA) choices and a reset button.

By clicking on the image, fetchImage function is called and random images are uploaded by fetching an API from Pixabay. The API queries include specific categories ('nature', 'animals') and an image type ('photos').

By clicking on each animal choice:

- handleFilter function assigns the NHA value and calls changeColor function
- changeColor function sets a specific CSS class
- each CSS class contains a combination of filters which imitates that specific NHA vision and will modify the image accordingly

Reset button ('Come back Pablita!') recalls the starting default image with its instruction message.

## Lessons learned

To create a SPA and use routing with React Routers.

To add a responsive background image.

To use CSS filter.

## Challenges and blockers

Total responsive behavior is still a work-in-progress.

Accessibility needs improving.

## Next features

Make instruction box appear at the same time as random images.

Add more animals.

Create back-end:

- Create an 'images' DB with two tables: NH and human images
- Tables will contain pairs of images that have already been processed to compare human and NH vision
- Elaborate on that DB

## Documentation

[Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
[React Bootstrap](https://react-bootstrap.netlify.app/)
[React Router](https://reactrouter.com/en/main)
[Pixabay API](https://pixabay.com/service/about/api/)

## Acknowledgements

[Speechbubble - original code](https://codingislove.com/css-speech-bubbles/)
[Inspiration for filters](https://linuxhint.com/change-color-image-blue-css/)

## Author

- [@tatimutter](https://github.com/tatimutter/)

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
