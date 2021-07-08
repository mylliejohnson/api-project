import React from 'react';
import {Link} from 'react-router-dom'


function Header(props) {
    return (
        <div>
            <nav>
               <Link to="/"><h1>IRONMAKEUP</h1></Link>
               <div>
                   <Link to="/brands">Brands & Categories</Link>
               </div>
            </nav>
        </div>
    );
}

export default Header;