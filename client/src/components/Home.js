import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
//import homePic from '../pictures/peacockfeather.jpg';

import './home.css';

import Button from 'react-bootstrap/Button';

//HOMEPIC LINK: https://qph.cf2.quoracdn.net/main-qimg-8cff84922129f22abfa62cc8636d5901.webp

function Home(props) {
	return (
		<>
			<div className="backgroundDiv bg-image shadow-2-strong">
				<h1 className="display-1 fw-bold">AniColors</h1>
				<p className="lead">
					There are endless words on Earth, as many as we can see.
					<br />
					Would you like to see the world through other animals' eyes?
				</p>
				<div className="buttonDiv">
					<NavLink to="/action">
						<Button className="startBtn" variant="outline-light" size="lg">
							TAKE A LOOK{' '}
						</Button>
					</NavLink>
				</div>
			</div>
		</>
	);
}

export default Home;

//FAILED ATTEMPT OF BACKEND BELOW:
// 	useEffect(() => {
// 		getHomePic();
// 	}, []);

// 	const getHomePic = async () => {
// 		let pic = '';
// 		try {
// 			const response = await fetch(
// 				'https://qph.cf2.quoracdn.net/main-qimg-8cff84922129f22abfa62cc8636d5901.webp'
// 			);
// 			console.log({ response }, response.body);

// 			if (response.ok) {
// 				//here I get the data using the JSON method
// 				pic = await response.json();

// 				console.log('server responded - status:', response.status); //I can't use dot notation inside curly braces, so in this case I will have to label my response 'manually'
// 			}
// 		} catch (error) {
// 			console.log({ error });
// 		}
// 	};

// 	getHomePic();
// 	// const getHomePic = () => {
// 	// 	let pic = '';
// 	// 	fetch(
// 	// 		'https://qph.cf2.quoracdn.net/main-qimg-8cff84922129f22abfa62cc8636d5901.webp'
// 	// 	)
// 	// 		.then((response) => {
// 	// 			if (!response.ok) {
// 	// 				throw new Error(
// 	// 					`Server responded: ${response.status}: ${response.statusText}`
// 	// 				);
// 	// 			}
// 	// 			pic = response.json();
// 	// 			return response.json();
// 	// 		})
// 	// 		.then((pic) => {
// 	// 			setPic(pic);
// 	// 		})
// 	// 		.catch((error) => {
// 	// 			console.log('Network error: ');
// 	// 		});
// 	// };
