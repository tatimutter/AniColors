import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

function Home(props) {
	return (
		<>
			<div className="backgroundDiv bg-image">
				<h1 className="app-title display-1 fw-bold">AniColors</h1>

				<p className="lead">
					There are endless words on Earth, as many as we can see.
					<br />
					Would you like to see the world through other animals' eyes?
				</p>

				<div className="buttonDiv">
					<NavLink to="/action">
						<Button className="actionBtn" variant="outline-light" size="lg">
							TAKE A LOOK{' '}
						</Button>
					</NavLink>
				</div>
			</div>
		</>
	);
}

export default Home;
