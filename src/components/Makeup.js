// --------- BRANDS AND CATEGORIES LISTS -------- //

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

function Makeup(props) {

	// arrays

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

	// map data 

	let brandLink = () => {
		return allBrands.map((item) => {
			return (
				<Link to={`/brand/${item}`} className="link link-hover">
					<li>{item}</li>
				</Link>
			);
		});
	};

	let catLink = () => {
		return allCategories.map((item) => {
			return(
				<Link to={`/category/${item}`} className="link link-hover">
					<li>{item}</li>
				</Link>
			)
		});
	};

	// main return !

	return (
		<div>
			<Header />
			<div className="Makeup">
				<div className="listOfBrands">
					<h2>Shop Brands</h2>
					<ul className="ul" style={{ columns: '4' }}>
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
