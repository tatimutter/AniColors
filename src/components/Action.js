import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import './action.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';

import defaultImg from '../images/spider_eyes.jpg';
import catImage from '../images/icons/cat.png';
import cowImage from '../images/icons/cow.png';
import whaleImage from '../images/icons/whale.png';
import beeImage from '../images/icons/bee.png';
import pixabayLogo from '../images/logo_square.png';

const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&category=nature;animals&image_type=photo`;

export default function Action(props) {
	const [animal, setAnimal] = useState(null);
	const [error, setError] = useState('');
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);
	const [filterClass, setFilterClass] = useState(null);
	// const [checked, setChecked] = useState(null);

	const handleFilter = (e) => {
		setAnimal(e.target.value);
		changeColor(e.target.value);
	};

	const changeColor = (animal) => {
		if (animal === 'cat') {
			setFilterClass('catFilter');
		}
		if (animal === 'cow') {
			setFilterClass('cowFilter');
		}
		if (animal === 'whale') {
			setFilterClass('whaleFilter');
		}
		if (animal === 'bee') {
			setFilterClass('beeFilter');
		}
	};

	const fetchImage = async () => {
		setAnimal(null);
		setError('');
		setImage(null);
		setLoading(true);
		setFilterClass(null);

		try {
			let response = await fetch(url);

			if (!response.ok) {
				setError(`Server error ${response.status} ${response.statusText}`); //
			} else {
				let data = await response.json();
				let dataArray = data.hits; //getting to the arrays of data
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

	const backToDefImg = () => {
		setImage(null);
	};

	return (
		<div className="actionBG">
			{/* Stack the columns on mobile by making one full-width and the other half-width */}
			<Container className="container fluid">
				<Row className="rowContainer ">
					<Col className="leftCol" xs={12} md={12} lg={8}>
						<figure class="image">
							<div className="imgDiv">
								{!image && error && <div class="errorDiv">Error: {error}</div>}
								{!image && loading && (
									<div className="spinner-border text-info" role="status"></div>
								)}
								{!image && !error && !loading && (
									<>
										<figcaption class="box3 speechBubble">
											<h3 class="box-title">
												Hi, I'm Pablita! <br />
												I'm here to help
											</h3>
											<p className="lead">
												Click on me to see a new image and then on the name of a
												non-human friend to see through their eyes. Click again
												on the image to see another one. <br />
												And if you need me back just click on my button!
											</p>
										</figcaption>

										<img
											className="defaultImg img-fluid"
											alt="Pablita, the jumping spider"
											src={defaultImg}
											onClick={fetchImage}
										/>
									</>
								)}

								{image && (
									<Figure>
										<Figure.Image
											className={filterClass}
											id="randomImg"
											alt="Random img from Pixabay API"
											src={image}
											onClick={fetchImage}
										/>
										<Figure.Caption className="pixaCaption">
											<span>Images fetched from Pixabay API. </span>
											<img
												className="pixabayLogo"
												alt="Pixabay logo"
												src={pixabayLogo}
											/>
										</Figure.Caption>
									</Figure>
								)}
							</div>
						</figure>
						<br />
					</Col>
					<Col className="rigthCol" xs={12} md={12} lg={4}>
						<Container
							fluid
							className="choiceContainer {
">
							<ButtonGroup
								className="btnGroup"
								vertical
								aria-label="Basic example">
								<Button
									className="choiceBtn"
									variant="transparent"
									onClick={handleFilter}
									checked={animal === 'cat'}
									value="cat">
									Cat <img className="cat" alt="" src={catImage} />
								</Button>
								<Button
									className="choiceBtn"
									variant="transparent"
									onClick={handleFilter}
									checked={animal === 'cow'}
									value="cow">
									Cow <img className="cow" alt="" src={cowImage} />
								</Button>
								<Button
									className="choiceBtn"
									variant="transparent"
									onClick={handleFilter}
									checked={animal === 'whale'}
									value="whale">
									Whale <img className="whale" alt="" src={whaleImage} />
								</Button>
								<Button
									className="choiceBtn"
									variant="transparent"
									onClick={handleFilter}
									checked={animal === 'bee'}
									value="bee">
									Bee <img className="bee" alt="" src={beeImage} />
								</Button>
							</ButtonGroup>

							<Button
								className="resetBtn"
								variant="info"
								size="lg"
								onClick={backToDefImg}>
								Come back Pablita!
							</Button>
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
