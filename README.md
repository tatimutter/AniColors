# AniColors App

## Project's Description

Hi!

The original aim of this App is to provide the user an easy way to see how other animals see the world.
Its long-shot/utopic objective would be to directly manipulate devices' camera filters in order to immediately filter camera view and let the user see through their device what another (non-human) being would see.

But for now we have this:

The full-stack App was supposed to let the user choose among a couple of non-human animals (NHA) and to compare between human and non-human vision. That is, the App was supposed to contain a database with some pre-loaded images - a specific pair of images for each NHA (one image of the pair showing the human vision and the other the non-human vision) - and, when the user chose the NHA, that specific pair of images would be get and loaded to the frontend.

Because of a series of unfortunate events, I chose to stick to front-end only, so the structure of the project had to change, giving me the opportunity to play with CSS filters. What the App does know, then, is loading a random image and give the user a choice of four NHAs. Clicking on a NHA, the image will be filtered, (slightly) imitating their particular vision.

The SPA has three/four Routers: Home, Action, About, and ErrorPage.
The whole action happens (not surprisingly) in the Action Router. In there I created a section where images are uploaded by fetching an API from Pixabay. The API (**\***how do I call that) includes specific categories ('nature', 'animals') and image type ('photos').

### Technologies I used

I used React, which is the JS library I am using the most at the moment.
I also used React Routes, which gives me the comfort of developing the project in a SPA.
For the CSS I used Bootstrap and ReactBootstrap (<https://react-bootstrap.netlify.app/>) importing specific Bootstrap components adapted for React.

### Problems and blockers

One of the biggest blocker was ensuring a responsive front-end behaviour for different devices. I would say it's still a work-in-progress.

### Next features

Add back-end:

---

## Setup

Run `npm install` to install packages.

Run `npm start` to run the development server.

`cd client` and run `npm install` install dependencies related to React (the client).

**\*\*\***INSTALLREACTROUTE (see video)

### .env file for API key

Create `.env` file in project (client) directory and add

REACT_APP_API_KEY = "33852742-89e11093af8722799d8e1010f"

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
