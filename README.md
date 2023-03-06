# AniColors App

## Project's Description

Hi!

The original aim of this App is to provide the user an easy way to see how other animals see the world.
Its long-shot/utopic objective would be to directly manipulate devices' camera filters in order to immediately filter camera view and let the user see through their device what another (non-human) being would see.

But for now we have this:

The full-stack App was supposed to let the user choose among a couple of non-human animals (NHA) and to compare between human and non-human vision. That is, the App was supposed to contain a database with some pre-loaded images - a specific pair of images for each NHA (one image of the pair showing the human vision and the other the non-human vision) - and, when the user chose the NHA, that specific pair of images would be get and loaded to the frontend.

Because of a series of unfortunate events, I chose to stick to front-end only, so the structure of the project had to change, giving me the opportunity to play with CSS filters. What the App does know, then, is loading a random image and give the user a choice of four NHAs. Clicking on a NHA, the image will be filtered, (slightly) imitating their particular vision.

[Note] Since I started with a full-stack, you will find instructions about DB tables already written in model/database.js.

## Setup

#### Client .env file for API key

Log on to Pixabay website <https://pixabay.com> to get your API Key.

Create `.env` file in project (client) directory and add your Pixabay API Key

REACT_APP_API_KEY = yourKey

### Front-end version

Run `npm install` to install packages.
This will install ReactRouter and ReactBootstrap, too.

Run `npm start` to run the development server.

### Full-stack version

#### Dependencies

Run `npm install` in the project folder to install dependencies related to Express (the server).

`cd client` and run `npm install` install dependencies related to React (the client).

#### Database Prep

Create `.env` file in project directory and add

```
DB_HOST=localhost
DB_USER=root
DB_NAME=images
DB_PASS=YOUR_PASSWORD
```

(replace `YOUR_PASSWORD` with your actual password)

Type `mysql -u root -p` to access the MySQL CLI using your password.

In the MySQL CLI, type `create database images;` to create a database in MySQL.

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

Run `node model/database.js` in your **TERMINAL**, in the **project** folder (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'items' in your database.

#### Run Your Development Servers

- Run `npm start` in project directory to start the Express server on port 5000

- `cd client` and run `npm start` to start client server in development mode with hot reloading in port 3000.

## Technologies I used

I used React, which is the JS library I am using the most at the moment.
I also used React Routes, which gives me the comfort of developing the project in a SPA.
For the CSS I used Bootstrap 5 and React Bootstrap importing specific Bootstrap components adapted for React.

## How it works

The SPA has four routes: Home, Action, About, and ErrorPage (for wrong URLs).
Home, Action and About will be seen by the user as three actual different pages. They can be accessed through their links in the navbar (Action 'LOOK' in the navbar).

[Important](Home, About and ErrorPage CSS are inside App.css. Action.js has its own dedicated .css file.)

The whole action happens (not surprisingly) in the Action route.
When the page loads, the user will see a default image (Pablita the jumpong spider) with an instruction message and a box containing four non-human animal choices and a reset button.

By clicking on the image, fetchImage function is activated and random images are uploaded by fetching an API from Pixabay. The API queries includes specific categories ('nature', 'animals') and an image type ('photos').

By clicking on each animal choice:

- handleFilter function assigns the NHA value and calls changeColor function
- changeColor function sets a specific CSS class
- each CSS class contains a combination of filters which imitates that specific NHA vision and will modify the image accordingly

Reset button ('Come back Pablita!') recalls the starting default image with its instruction message.

## Problems and blockers

The first huge blocker, which I have not overcome yet, was building the back end.

I had to spend some time and ask for help to make some event handlers work.

The last big blocker was ensuring a responsive frontend behaviour for different devices. I would say it's still a work-in-progress.

## Need to do and improve

Accessibility.

Front end styling, particularly responsive design.

Make box appear together with random images.

Normalize .css files (all CSS in just one App.css or a .css for each .js)

Maybe find a better title for the project.

## Next features

Add more filters

On the back-end front:

- Create an 'images' DB with two tables: NH and human images
- Tables will contain pairs of images that have already been processed to compare human and NH vision
- Elaborate on that DB

## Resources

[Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
[React Bootstrap](https://react-bootstrap.netlify.app/)
[React Router](https://reactrouter.com/en/main)
[Pixabay API](https://pixabay.com/service/about/api/)
[Speechbubble - original code](https://codingislove.com/css-speech-bubbles/)
[Inspiration for filters](https://linuxhint.com/change-color-image-blue-css/)

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
