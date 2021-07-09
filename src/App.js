import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Landing from './components/Landing';
import Makeup from './components/Makeup';
import BrandProducts from './components/BrandProducts';
import Header from './components/Header';
import Categories from './components/Categories';
import Post from './components/Post';
import SingleProduct from './components/SingleProduct';
import Wishlist from './components/Wishlist';

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
				
				<Route exact path="/product/:id" render={(props) => <SingleProduct {...props} />} />

				<Route exact path="/connect" component={Post}/>
				<Route exact path="/wishlist" component={Wishlist}/>

			</Switch>
		</div>
	);
}

export default App;

