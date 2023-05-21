import './App.css';
import React from 'react';

import About from './components/About';
import Home from './components/Home';
import Action from './components/Action';
import ErrorPage from './components/ErrorPage';

import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<nav className="navbar fixed-top justify-content-end navbar-expand-lg navbar-light shadow p-3 mb-5">
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<NavLink exact to="/">
								<button type="button" className="btn bg-transparent navBtn">
									Home
								</button>
							</NavLink>
						</li>
						<li class="nav-item">
							<NavLink to="/action">
								<button type="button" className="btn lg bg-transparent navBtn">
									LOOK
								</button>
							</NavLink>
						</li>
						<li class="nav-item">
							<NavLink to="/about">
								<button type="button" className="btn bg-transparent navBtn">
									About
								</button>
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/action" element={<Action />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
