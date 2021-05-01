import React from 'react'
import { Link } from 'react-router-dom';

 function Services() {
    return (
        <div>
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
 			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
 			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
 			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
 			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <Link to="/Services/3">Catering</Link><br></br>
             <Link to="/Services/2">Delivery</Link><br></br>
             <Link to="/Services/5">Customer</Link><br></br>
            
        </div>
    )
}
export default Services;
