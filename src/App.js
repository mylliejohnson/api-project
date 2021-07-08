import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Landing from './components/Landing';
import Makeup from './components/Makeup';
import BrandProducts from './components/BrandProducts';
import Header from './components/Header';
import Categories from './components/Categories';

// bg image: https://unsplash.com/photos/-wMO-4ljqhk

function App() {

	// main return
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" render={(props) => <Landing {...props} />} />
				<Route exact path="/brands" render={(props) => <Makeup {...props} />} />
				<Route exact path="/brand/:brandProducts" render={(props) => <BrandProducts {...props} />} />
				<Route exact path="/category/:catProducts" render={(props) => <Categories {...props} />} />
			</Switch>

			<footer style={{ padding: '10px' }}>
				Created by Myllie Johnson | <a href="https://github.com/mylliejohnson/api-project">GitHub</a>
			</footer>
		</div>
	);
}

export default App;

