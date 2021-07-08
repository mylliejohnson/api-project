// --------- BRANDS AND CATEGORIES LISTS -------- //

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './Header';

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


	console.log(props)

	let [list, setList] = useState(allBrands); // brands array

	let [catList, setCatList] = useState(allCategories); // categories array

	// let [makeup, setMakeup] = useState([]); // set api

	// useEffect(() => {
	// 	axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${props.match.params.brandProducts}`).then((res) => {
	// 		setMakeup(res.data);
	// 		console.log(res.data)
	// 	});
	// }, []);

	// console.log(props)
	

	let brandLink = () => {
		return list.map((item) => {
			return (
				<Link to={`/brand/${item}`} className="link link-hover">
					<li>{item}</li>
				</Link>
			);
		});
	};

	let catLink = () => {
		return catList.map((item) => {
			return (
				<Link to={`/category/${item.product_type}`} className="link link-hover">
					<li>{item}</li>
				</Link>
				
			);
		});
	};

console.log(catLink())

	return (
<div>
		<Header/>
		<div className="Makeup">
		
			<div className="listOfBrands">
				<h2>Shop Brands</h2>
                <ul className="ul" style={{columns: '4'}}>
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
		</div>
	);
}

export default Makeup;