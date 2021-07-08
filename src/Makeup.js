// --------- BRANDS AND CATEGORIES LISTS -------- //

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';

import Header from './components/Header';


function Makeup(props) {
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
	let allCategories = [
		'blush',
		'bronzer',
		'eyebrow',
		'eyeliner',
		'eyeshadow',
		'foundation',
		'lip liner',
		'lipstick',
		'mascara',
		'nail polish',
	];

	let [list, setList] = useState(allBrands); // brands array
	let [makeup, setMakeup] = useState([]); // set api
	let [catList, setCatList] = useState(allCategories);

	useEffect(() => {
		axios.get('http://makeup-api.herokuapp.com/api/v1/products.json').then((res) => {
			setMakeup(res.data);
			console.log(makeup);
		});
	}, []);

	let brandLink = () => {
		return list.map((item) => {
			return (
				<Link to={`/brand/${item}`} className="link">
					<li>{item}</li>
				</Link>
			);
		});
	};

	let catLink = () => {
		return catList.map((item) => {
			return (
				<Link to={`/category/${item}`} className="link">
					<li>{item}</li>
				</Link>
			);
		});
	};

	return (
		<div className="Makeup" style={{ marginTop: '25px' }}>
			<div className="listOfBrands">
				<h2>Shop Brands</h2>
                <ul className="ul" style={{columns: '3'}}>
                {brandLink()}
                </ul>
				
			</div>

			<div className="listOfCategories">
				<h2>Shop Categories</h2>
                <ul className="ul">
				{catLink()}
                </ul>
			</div>
		</div>
	);
}

export default Makeup;
