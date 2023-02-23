import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
//import homePic from '../pictures/peacockfeather.jpg';

import './home.css';

import Button from 'react-bootstrap/Button';

//HOMEPIC LINK: https://qph.cf2.quoracdn.net/main-qimg-8cff84922129f22abfa62cc8636d5901.webp

function Home(props) {
	return (
		<>
			<div className="intro bg-image shadow-2-strong">
				<h1>AniColors</h1>

				<NavLink to="/action">
					<Button variant="outline-light">START</Button>
				</NavLink>
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
