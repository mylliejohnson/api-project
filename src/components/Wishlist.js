import React, {useEffect, useState} from 'react';
import axios from 'axios';


// THIS IS THE WISH LIST!

function Wishlist(props) {

    let [wish, setWish] = useState([])

    const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(wish);
		axios
			.post(`https://ironrest.herokuapp.com/makeup`, wish)
			.then((res) => {
				console.log(res);
			})
			.catch(console.error);
	};

    

    return (
        <div className="Wishlist">
            this is the wishlist
        </div>
    );
}

export default Wishlist;