import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, Route, Switch} from 'react-router-dom'

function BrandProducts(props) {

let [products, setProducts] = useState([])

    useEffect(() => {
      axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
      .then((res) => {
        setProducts(res.data)
        
        console.log(products)
      })
     }, [])

     function saySomething(){
         return(
             <div>HELLO! this is the products page</div>
         )
     }

    return (
        <div>
            {saySomething()}
        </div>
    );
}

export default BrandProducts;