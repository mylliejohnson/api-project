import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, Route, Switch} from 'react-router-dom'
import Header from './Header';

function BrandProducts(props) {

let [products, setProducts] = useState([])

    useEffect(() => {
        console.log("is this effect working?")
      axios
      .get(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${props.match.params.brandProducts}`)
      .then((res) => {
        setProducts(res.data)
      })
     }, [])


     //map -> link to each product details
     // this is my list of beer !

function mapped (){ 
return products.map((items) => {
    return (
        <div className="product-list">
        <div className="prodcuct-img">
            <img src={items.image_link} className="prodcuct-img"/>
        </div>
           <div>
           <h2>{items.name}</h2>
            <ul>{items.brand}</ul>
            <ul><strong>${items.price}</strong></ul>
           </div>
        </div>
    )
    })
}

    return (
        <div >
            {Header()}
            {mapped()}
        </div>
    );
}

export default BrandProducts;