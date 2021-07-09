import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './Header';

function SingleProduct(props) {

let [product, setProduct] = useState([])

    useEffect(async() => {
      let res = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products/${props.match.params.id}.json?/`);
      setProduct(res.data)
     }, [])

     console.log(product)

     async function addFavorite(product){
         product.user = localStorage.getItem("email")
         let res = await axios.post('https://ironrest.herokuapp.com/makeup_faves', product)
         console.log(res.data)
     }

    return (
      
        <div style={{margin:"auto"}}>
        <Header/>
           <div className="SingleProduct" style={{width:"70%"}}>
            <h1>{product.name}</h1>
            <h3>${product.price}</h3>
            <img src={product.image_link} /> 
            <h2>{product.brand}</h2>
            <a href={product.product_link} target="_blank" style={{border: "2px dashed black", padding:'3px'}} >Product Link Here</a> |   
            <button onClick={() => addFavorite(product)}>❤︎ add to wishlist</button>
            <p>{product.description}</p>
            <div>
            </div>
           </div>
        </div>
    );
}

export default SingleProduct;