import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

function Post(props) {
	const [signUp, setSignUp] = useState({});

	const handleChange = (e) => {
		let copySignUp = { ...signUp };
		copySignUp[e.target.name] = e.target.value;
        console.log(copySignUp)
		setSignUp(copySignUp);
	};



	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(signUp);
		axios
			.post(`https://ironrest.herokuapp.com/makeup`, signUp)
			.then((res) => {
				console.log(res);
			})
			.catch(console.error);
	};

	return (
		<div>
			<Header />
			<div className="center-form">
				<h2>Enter your email for newsletters, tutorials and more!</h2>
				<i>Feel free to share your favorite makeup content!</i>

				<form onSubmit={handleSubmit}>
					<input name="name" onChange={handleChange} placeholder="name" type="text" required />

					<input name="email" onChange={handleChange} placeholder="email" type="email" required />

					<input
						name="zip code"
						onChange={handleChange}
						placeholder="zip code"
						type="text"
						pattern="[0-9]*"
					/>

					<input
						name="link"
						onChange={handleChange}
						placeholder="url to sites and videos"
						type="url"
						pattern="https://.*"
					/>

					<textarea
						name="feedback"
						onChange={handleChange}
						placeholder="Your feedback is kindly appreciated! <3"
					></textarea>

					<button className="submit-btn">Hook me up!! </button>
				</form>
			</div>
		</div>
	);
}

export default Post;
