import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';

function ErrorPage() {
	return (
		<>
			<div className="errorDiv">
				<h1>Ups! This is an error page</h1>
				<h2>Something went wrong</h2>

				<NavLink exact to="/">
					<button type="button" className="btn bg-transparent homeBtn">
						Go back Home
					</button>
				</NavLink>
			</div>
		</>
	);
}

export default ErrorPage;
