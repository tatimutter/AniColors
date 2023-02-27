import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';

function ErrorPage() {
	return (
		<>
			<errorPageDiv>
				<h1>Ups! This is an Error Page.</h1>
				<h2>Something went wrong.</h2>
			</errorPageDiv>
		</>
	);
}

export default ErrorPage;
