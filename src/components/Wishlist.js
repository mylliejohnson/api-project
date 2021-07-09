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

const wishStyle = {
    backgroundColor: "white",
    border: "3px solid black",
    width: '80%',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left'
}

const showWishes = () => {
    return wish.map((item) => {
        return (
            <div id="wish-product" style={wishStyle}>
            <img src={item.image_link} style={{width:'100px', marginRight: '20px'}}/>
            <div><Link to={`/product/${item.id}`}>
                <h3>{item.name}</h3>
                
                </Link> 
                <h4><span>{item.brand}  | </span>${item.price}</h4>
                </div>
            </div>
        )
    })
}

    return (
        <div>
        <Header/>
        <div className="Wishlist" style={{marginLeft:'auto'}}>
            {showWishes()}</div>
        </div>
    );
}

export default Wishlist;