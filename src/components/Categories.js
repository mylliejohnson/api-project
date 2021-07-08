import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

function Categories(props) {
	let [products, setProducts] = useState([]);

	useEffect(() => {
		console.log('is this effect working?');
		axios
			.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${props.match.params.catProducts}`)
			.then((res) => {
				setProducts(res.data);
			});
	}, []);

	function mapped() {
		return products.map((items) => {
			return (
			
					<div className="product-list">
						<div>
							<img src={items.image_link} style={{ width: '150px' }} />
						</div>
						<div>
							<h2>{items.name}</h2>
							<ul>{items.brand}</ul>
							<ul>
								<strong>${items.price}</strong>
							</ul>
						</div>
					</div>
			);
		});
	}

	return (
		<div>
			{Header()}
			{mapped()}
		</div>
	);
}

export default Categories;
