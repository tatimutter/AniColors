var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

//var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

const images = require('./data/images.js'); //Importing external database

const app = express(); //Running Express, assigning it to an app
app.use(express.json()); //Parsing JSON requests
// Read in the docs: In general, app.use() function adds a middleware to the app.
// express.json is a built in middleware that parses incoming JSON requests and puts the parsed data in req.body (without it, req.body qould be undefined!)

// Initialize variable to give each new Pokemon a unique ID
let nextPokemonId = data.length + 1;

//THE METHODS WE ARE USING ARE ALL HTTP METHODS. WE ARE HANDLING THEM WITH THE EXPRESS FRAMEWORK
//Code below gives a first message to whom tries to contact my server using the basic route, that is, the local URL without parameters
app.get('/', function (req, res) {
	res.send({ message: 'Hello! Try /pokemon' });
});

//Here below we are answering a GET request about all our, sending back a response with all the data
// GET all Pokemons
app.get('/pokemon', function (req, res) {
	// Return all Pokemons
	res.send(data);
});

//Here we receive a GET for a specific item, we use the .find method to catch it through its id and respond with its data. GOTTA CATCH'EM ALL!
// GET Pokemon by ID
app.get('/pokemon/:id', function (req, res) {
	// Find Pokemon with requested ID
	const pokemon = data.find((p) => p.id === Number(req.params.id));

	//We return the item if we found it
	if (pokemon) {
		// Pokemon was found; return it
		res.send(pokemon);
		//Otherwise, we create a message error (using object/JSON notation)
	} else {
		// Pokemon was not found; return 404 error
		res.status(404).send({ error: 'Pokemon does not exist' });
	}
});

//We look for a specific item through its id, gets its specific attacks and respond sending them back
// Get attacks by Pokemon ID
app.get('/pokemon/:id/attacks', function (req, res) {
	const pokemon = data.find((p) => p.id === Number(req.params.id));

	//We return the item if we found it
	if (pokemon) {
		// Pokemon was found; return it
		res.send(pokemon.attacks);
		//Otherwise, we create a message error (using object/JSON notation)
	} else {
		// Pokemon was not found; return 404 error
		res.status(404).send({ error: 'Pokemon does not exist' });
	}
});

//In this case we are receiving, through the .post method, the request to add a whole new item to our data. We will have to do that with Postman
// POST Pokemon
app.post('/pokemon', function (req, res) {
	// Create new Pokemon obj with req.body. We use req.body because the client would put the new item they want to add in the body of their POST reques
	let newPokemon = req.body; //I assign the new item the content of the body
	// Add unique ID to obj, then increment unique ID variable
	newPokemon.id = nextPokemonId; //I used the variable that was created at the beginning
	// Add new Pokemon obj to data array
	data.push(newPokemon);

	// Return array of all Pokemons

	res.send({ message: `Your new Pokemon name is ${newPokemon.name}` });
});

//With the put method, the client is asking the server to replace an item with a new one. We will do it and return the updated data
// PUT Pokemon by ID
app.put('/pokemon/:id', function (req, res) {
	// Find the index of the Pokemon with the requested ID
	let targetPokemon = data.findIndex((p) => p.id === Number(req.params.id));

	// If the Pokemon was found
	// Replace it with req.body in the array
	if (targetPokemon >= 0) {
		let reqPokemon = req.body;
		data.splice(targetPokemon, 1, reqPokemon);
		// Return updated array
		res.send(data);
		// Else
		// Return 404 error
	} else {
		res.status(404).send({ error: 'Pokemon does not exist' });
	}
});

//Receiving the request to delete an item and responding to it
// DELETE Pokemon by ID
app.delete('/pokemon/:id', function (req, res) {
	const pokemon = data.find((p) => p.id === Number(req.params.id));
	if (pokemon) {
		data.splice(pokemon, 1);
		res.send({
			message: `You cancelled ${pokemon.name}. Now your Pokemons are: ${data}`, //Why is data not appearing as a regular array?
		});
	}
});

//App.listen() function assign a port to our server
app.listen(5000);
console.log('Listening on port 5000...');

module.exports = app;
