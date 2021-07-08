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
			<h1 style={{fontSize: "100px"}}>IRONMAKEUP</h1>
			<h2>one stop beauty shop</h2>
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
		</div>
	);
}

export default Landing;
