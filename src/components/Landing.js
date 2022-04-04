import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Landing(props) {
	// random quote
	let [quote, setQuote] = useState({});

	useEffect(() => {
		axios.get(`https://api.adviceslip.com/advice`).then((res) => {
			setQuote(res.data.slip);
		});
	}, []);



	return (
		<div className="landing">
			<div className="headings">
				<h1>IRONMAKEUP</h1>
				<h2>the one stop beauty shop</h2>
			</div>

			<div className="quote">
				<span>advice for the soul:</span>
				<br />
				<i>{quote.advice} </i>
			</div>

			<div className="lets-shop">
				<Link to="/brands" className="link">
					<button className="shopping">LET'S GO SHOPPING!! </button>
				</Link>
			</div>

			<footer>
				Created by Myllie Johnson | <a href="https://github.com/mylliejohnson/api-project">GitHub</a>
			</footer>
		</div>
	);
}

export default Landing;
