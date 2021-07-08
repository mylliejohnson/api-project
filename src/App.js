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
	let allBrands = [
		'almay',
		'alva',
		'anna sui',
		'annabelle',
		'benefit',
		'boosh',
		"burt's bees",
		'butter london',
		"c'est moi",
		'cargo cosmetics',
		'china glaze',
		'clinique',
		'coastal classic creation',
		'colourpop',
		'covergirl',
		'dalish',
		'deciem',
		'dior',
		'dr. hauschka',
		'e.l.f.',
		'essie',
		'fenty',
		'glossier',
		'green people',
		'iman',
		"l'oreal",
		'lotus cosmetics usa',
		"maia's mineral galaxy",
		'marcelle',
		'marienatie',
		'maybelline',
		'milani',
		'mineral fusion',
		'misa',
		'mistura',
		'moov',
		'nudus',
		'nyx',
		'orly',
		'pacifica',
		'penny lane organics',
		'physicians formula',
		'piggy paint',
		'pure anada',
		'rejuva minerals',
		'revlon',
		"sally b's skin yummies",
		'salon perfect',
		'sante',
		'sinful colours',
		'smashbox',
		'stila',
		'suncoat',
		'w3llpeople',
		'wet n wild',
		'zorah',
		'zorah biocosmetiques',
	];

	// main return
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" render={(props) => <Landing {...props} />} />

				<Route exact path="/brands" render={(props) => <Makeup {...props} />} />

				<Route exact path="/brand/:brandProducts" render={(props) => <BrandProducts {...props} />} />

				<Route exact path="/categories/:catProducts" render={(props) => <Categories {...props} />} />

			</Switch>

			<footer style={{ padding: '10px' }}>
				Created by Myllie Johnson | <a href="https://github.com/mylliejohnson/api-project">GitHub</a>
			</footer>
		</div>
	);
}

export default App;

/* <Route exact path="/brands/:brandProdcuts" render={(props) => <Makeup {...props}/>} /> */
