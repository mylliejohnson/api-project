import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './Header';

function SingleProduct(props) {

let [product, setProduct] = useState([])

    useEffect(async() => {
      let res = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products/${props.match.params.id}.json?/`);
      setProduct(res.data)
     }, [])

    return (
      
        <div>
        <Header/>
           <div>
           <h1>{product.name}</h1> 
           <img src={product.image_link} />
           </div>
        </div>
    );
}

export default SingleProduct;