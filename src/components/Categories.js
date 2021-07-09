import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

function Categories(props) {
	let [products, setProducts] = useState([]);

	useEffect(() => {
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
						<Link to={`/product/${items.id}`}>
							<h3>{items.name}</h3>
							<strong>${items.price}</strong>
						</Link>
					</div>
				</div>
			);
		});
	}

	return (
		<div>
			{Header()}

			<div className="flex-product">{mapped()}</div>
		</div>
	);
}

export default Categories;
