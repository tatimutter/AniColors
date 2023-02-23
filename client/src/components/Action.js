import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import homePic from '../pictures/peacockfeather.jpg';
import './action.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const url =
	'https://pixabay.com/api/?key=33852742-89e11093af8722799d8e1010f&category=nature,animals,people&image_type=photo';
export default function Action(props) {
	const [animal, setAnimal] = useState(null);
	const [error, setError] = useState('');
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setAnimal(e.target.value);
		//here I will have to change colors for each animal
	};

	const uncheckOthers = () => {
		//how?
	};

	const fetchImage = async () => {
		//reset form
		//call the APIs and

		setError('');
		setImage(null);
		setLoading(true);
		console.log('image is loading');

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
		<Container>
			{/* Stack the columns on mobile by making one full-width and the other half-width */}
			<Row>
				<Col xs={12} md={8}>
					<div className="imgDiv">
						{!image && <h2>Choose your image</h2>}
						{image && (
							<img
								className="randomImg"
								alt="Random img from Pixabay API"
								src={image}
							/>
						)}
					</div>
					<br />
				</Col>
				<Col xs={6} md={4}>
					<Form>
						{/* HOW DO I DISABLE THE OTHERS WHEN ONE IS CLICKED? */}
						<div key="reverse-radio" className="mb-3">
							<Form.Check
								reverse
								type="radio"
								id="reverse-radio"
								value="non-human1"
								label={`Non-human 1`}
								onChange={handleChange}
								checked={animal === 'Non-human 1'}
								onclick={uncheckOthers}
							/>
							<Form.Check
								reverse
								type="radio"
								id="reverse-radio"
								value="non-human2"
								label={`Non-human 2`}
								onChange={handleChange}
								checked={animal === 'Non-human 2'}
								onclick={uncheckOthers}
							/>
							<Form.Check
								reverse
								type="radio"
								id="reverse-radio"
								value="non-human3"
								label={`Non-human 3`}
								onChange={handleChange}
								checked={animal === 'Non-human 3'}
								onclick={uncheckOthers}
							/>
							{/* Keeping an example of Bootstrap disabled radio button, just in case */}
							{/* <Form.Check
									disabled
									type={type}
									label={`disabled ${type}`}
									id={`disabled-default-${type}`}
								/> */}
						</div>
					</Form>

					<p>
						<strong>TESTING:</strong> You chose {animal}{' '}
						{/* Testing if radio buttons are working */}
						<br />
					</p>

					<Button variant="info" onClick={fetchImage}>
						New image
					</Button>
				</Col>
			</Row>
		</Container>
	);
}
