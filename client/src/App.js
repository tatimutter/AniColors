//import logo from './logo.svg';
import './App.css';
import React from 'react';

import About from './components/About';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
	// 	useEffect(() => {
	// 		getHumImgs();
	// 	}, []);

	// 	let [humImgs, setHumImgs] = useState([]);

	// let [newImage, setNewImage] = useState({
	// 	name
	// })

	// const getHumImgs = async () => {
	// 	fetch('/humans')

	// }

	return (
		<div className="App">
			<nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 rounded">
				<NavLink to="/">
					<button type="button" className="btn bg-transparent">
						Home
					</button>
				</NavLink>
				<NavLink to="/about">
					{/* <button type="button" className="btn bg-transparent">
						About
					</button> */}
				</NavLink>
				<NavLink to="/contact">
					<button type="button" className="btn bg-transparent">
						Contact
					</button>
				</NavLink>
			</nav>
			<div className="test">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
