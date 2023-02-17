//import logo from './logo.svg';
import './App.css';
import React from 'react';

import About from './components/About';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
	//const navigate = useNavigate();
	return (
		<div className="App">
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header> */}
			<nav className="navbar">
				<NavLink to="/">
					<button className="button-danger">Home</button>
				</NavLink>
				<NavLink to="/about">
					<button className="button-light">About</button>
				</NavLink>
			</nav>
			<div className="test">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
