import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
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


    //  let [wish, setWish] = useState({})

    //  const handleSubmit = async (e) => {
    //      e.preventDefault()
    //      axios.post(`https://ironrest.herokuapp.com/makeup`, wish)
    //      .then((res) => {
    //          console.log(res)
    //      })
    //      .catch(console.log(error))
    //  }


     //map -> link to each product details
     // this is my list of beer !

function mapped (){ 
return products.map((items) => {
    return (
        <div className="product-list">
            <div>
                <img src={items.image_link} style={{ width: '150px' }}/>
            </div>

            <div>
                <Link to={`/product/${items.id}`}>
                <h3>{items.name}</h3>
                    <ul>
                    <strong>${items.price}</strong>
                    </ul> 
                    </Link>
                    <button>❤︎ add to wishlist</button>
            </div>
        </div>
    )
    })
}

    return (
        <div >
            {Header()}
            <div className="flex-product">
            {products.brand}
                {mapped()}
            </div>
        </div>
    );
}

export default BrandProducts;