import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Landing from './components/Landing';
import Makeup from './Makeup';
import BrandProducts from './components/BrandProducts';
import Header from './components/Header';
//import Quotes from './components/Quotes';
// bg image: https://unsplash.com/photos/-wMO-4ljqhk

function App() {
	// main return
	return (
		<div className="App">
			<Switch>
        <Route exact path="/" render={(props) => <Landing {...props} />} />
				<Route exact path="/brands" render={(props) => <Makeup {...props} />} />
				<Route exact path="/brands/" render={(props) => <Makeup {...props} />} />
				<Route exact path="/brands/:thisBrand" render={(props) => <BrandProducts {...props} />} />
		
			</Switch>

			<footer style={{ padding: '10px' }}>Created by Myllie Johnson</footer>
		</div>
	);
}

export default App;

/* <Route exact path="/brands/:brandProdcuts" render={(props) => <Makeup {...props}/>} /> */