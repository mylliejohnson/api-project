import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Landing(props) {
	// random quote
	let [quote, setQuote] = useState({});

	useEffect(() => {
		axios.get(`https://iron-cors-anywhere.herokuapp.com/https://api.fisenko.net/quotes/`).then((res) => {
			setQuote(res.data);
			console.log(quote);
		});
	}, []);

	return (
		<div className="landing">
		<div className="headings">
			<h1>IRONMAKEUP</h1>
			<h2>the one stop beauty shop</h2>
			</div>

			<div className="quote">
				<i>{quote.text} </i>
				<p></p><strong>- {quote.author}</strong><p></p>
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
