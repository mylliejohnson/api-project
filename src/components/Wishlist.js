import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';

// THIS IS THE WISH LIST!

function Wishlist(props) {

    let [wish, setWish] = useState([])

 // onload 
useEffect (function() {
    axios
      .get(`https://ironrest.herokuapp.com/findAll/makeup_faves?user=${localStorage.getItem("email")}`)
      .then((res) => {
          console.log(res)
        setWish(res.data)
      })
},[])

// map wish.map

const showWishes = () => {
    return wish.map((item) => {
        return (
            <div>
            <img src={item.image_link} style={{width:'100px'}}/>
            <Link to={`/product/${item.id}`}>
                <h3>{item.name}</h3>
                </Link>
            </div>
        )
    })
}

    return (
        <div className="Wishlist">
        <Header/>
            {showWishes()}
        </div>
    );
}

export default Wishlist;