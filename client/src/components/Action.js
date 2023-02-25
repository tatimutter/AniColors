import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import './action.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';

const url =
	'https://pixabay.com/api/?key=33852742-89e11093af8722799d8e1010f&category=nature,animals&image_type=photo';

export default function Action(props) {
	const [animal, setAnimal] = useState(null);
	const [error, setError] = useState('');
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);
	const [filterClass, setFilterClass] = useState(null);
	const [checked, setChecked] = useState(null);

	const chooseAnimal = (e) => {
		setAnimal(e.target.value);
		changeColor(e.target.value);
	};

	const changeColor = (animal) => {
		if (animal === 'dog') {
			setFilterClass('dogFilter');
		}
		if (animal === 'cat') {
			setFilterClass('catFilter');
		}
		if (animal === 'goat') {
			setFilterClass('xFilter');
		}
	};

	const fetchImage = async () => {
		setAnimal(null); //Clearing all radio buttons. Solved, thanks to Suraj Sharma https://surajsharma.net/blog/react-handle-radio-buttons
		setError('');
		setImage(null);
		setLoading(true);
		setFilterClass(null);

		try {
			let response = await fetch(url);

			if (!response.ok) {
				//First, check that the status response is 'ok', because if it isn't it will not go on to fetch.

				setError(`Server error ${response.status} ${response.statusText}`); //
			} else {
				let data = await response.json();
				//console.log(data);
				let dataArray = data.hits; //getting to the arrays of data
				//console.log(dataArray);
				let randomObject =
					dataArray[Math.floor(Math.random() * dataArray.length)]; //randomly choose one object from the array
				console.log(randomObject.webformatURL);

				setImage(randomObject.webformatURL); //Storing url of API data into 'image' variable
			}
		} catch (error) {
			setError('Error: ' + error.message);
		}

		setLoading(false);
	};

	return (
		<Container className="container">
			{/* Stack the columns on mobile by making one full-width and the other half-width */}
			<Row>
				<Col xs={12} md={8}>
					<div className="imgDiv">
						{!image && <h2>Choose your image</h2>}
						{image && (
							<img
								className={filterClass}
								// style={`filter:grayscale(100%)`}
								id="randomImg"
								alt="Random img from Pixabay API"
								src={image}
							/>
						)}
					</div>
					<br />
				</Col>
				<Col xs={6} md={4}>
					{/* FORM OPTION*/}
					{/* HOW CAN I UNCHECK A BUTTON WHEN ANOTHER ONE IS CHECKED? */}
					<Form>
						<div key="reverse-radio" className="mb-3">
							<Form.Check
								reverse
								type="radio"
								id="reverse-radio"
								value="dog"
								label={`Dog`}
								onChange={chooseAnimal}
								checked={animal === 'dog'}
							/>
							<Form.Check
								reverse
								type="radio"
								id="reverse-radio"
								value="cat"
								label={`Cat`}
								onChange={chooseAnimal}
								checked={animal === 'cat'}
							/>
							<Form.Check
								reverse
								type="radio"
								id="reverse-radio"
								value="goat"
								label={`Goat`}
								onChange={chooseAnimal}
								checked={animal === 'goat'}
							/>
						</div>
					</Form>

					<Button variant="info" onClick={fetchImage}>
						New image
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

{
	/* BUTTON GROUP OPTION */
}
{
	/*<ButtonGroup vertical>
						<Button
							variant="info"
							value="dog"
							//onClick={chooseAnimal}
							onClick={dogColor}>
							{' '}
							
							Dog
						</Button>
						 <Button
							variant="info"
							value="cat"
							onClick={chooseAnimal}
							onChange={changeColor}>
							Cat
						</Button>
						<Button
							variant="info"
							value="goat"
							onClick={chooseAnimal}
							onChange={changeColor}>
							Goat
						</Button> 
					</ButtonGroup>*/
}
