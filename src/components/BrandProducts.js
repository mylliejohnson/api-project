import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, Route, Switch} from 'react-router-dom'

function BrandProducts(props) {

let [products, setProducts] = useState([])

    useEffect(() => {
        console.log("is this effect working?")
      axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${props.match.params.brandProducts}`)
      .then((res) => {
          console.log(res.data)
        setProducts(res.data)
      })
     }, [])

     console.log(products)

function mapped (){ 
return products.map((items) => {
    return (
        <div>
            <ul>{items.name}</ul>
            <ul>{items.brand}</ul>
            <ul>${items.price}</ul>
            <ul>{items.description}</ul>
        </div>
    )
    })
}
     function saySomething(){
         return(
             <div>HELLO! this is the products page</div>
         )
     }

    return (
        <div>
            {saySomething()}
            {mapped()}
        </div>
    );
}

export default BrandProducts;