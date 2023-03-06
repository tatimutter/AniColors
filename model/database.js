require('dotenv').config();
const mysql = require('mysql');

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
	host: DB_HOST || '127.0.0.1',
	user: DB_USER || 'root',
	password: DB_PASS,
	database: DB_NAME || 'images',
	multipleStatements: true,
});

con.connect(function (err) {
	if (err) throw err;
	console.log('Connected!');

	//modify the SQL line to create my own tables
	let sql =
		'DROP TABLE if exists humanImages; DROP TABLE if exists animalImages; CREATE TABLE humanImages(humID INT NOT NULL AUTO_INCREMENT, name VARCHAR(40) not null, src VARCHAR(100) not null, PRIMARY KEY (humID)); CREATE TABLE animalImages(animID INT NOT NULL AUTO_INCREMENT, name VARCHAR(40) not null, src VARCHAR(100) not null, PRIMARY KEY (animID),  FOREIGN KEY (HumID) REFERENCES humanImages(HumID));';
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(
			'Table creation `humanImages` and `animalImages` was successful!'
		);

		console.log('Closing...');
	});

	// let sql =
	// 	'; ';
	// con.query(sql, function (err, result) {
	// 	if (err) throw err;
	// 	console.log('Table creation CREATE TABLE animalImages(animID INT NOT NULL AUTO_INCREMENT, name VARCHAR(40) not null, src VARCHAR(100) not null, PRIMARY KEY (animID),  FOREIGN KEY (HumID) REFERENCES humanImages(HumID)) ;` was successful!');

	// 	console.log('Closing...');
	// });

	con.end();
});
