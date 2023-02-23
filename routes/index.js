var express = require('express');
var router = express.Router();

const db = require('../model/helper.js');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send({ title: 'Express' });
});

router.get('/', function (req, res, next) {
	db('SELECT * FROM human_images')
		.then((results) => {
			res.send(results.data);
		})
		.catch((err) => res.status(500).send(err));
});

router.get('/:id', function (req, res) {
	db(`SELECT * FROM human_images WHERE id = ${req.params.id};`)
		.then((results) => {
			res.send(results.data);
		})
		.catch((err) => res.status(500).send(err));
});

// // INSERT a new student into the DB
// router.post('/', function (req, res) {
// 	let { firstname, lastname } = req.body;
// 	let sql = `INSERT INTO students (firstname, lastname) VALUES ('${firstname}', '${lastname}');`;
// 	db(sql)
// 		.then((results) => {
// 			getStudents(req, res);
// 		})
// 		.catch((err) => res.status(500).send(err));
// });

// // DELETE a student from the DB
// router.delete('/:id', function (req, res) {
// 	let sql = `DELETE FROM students WHERE id = ${req.params.id};`;
// 	db(sql)
// 		.then((results) => {
// 			getStudents(req, res);
// 		})
// 		.catch((err) => res.status(500).send(err));
// });

module.exports = router;
