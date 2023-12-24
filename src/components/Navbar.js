import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {

   return (
        <div>
            <div className='NavContainer'>
                <div className='NavWrapper'>
                    <div className='NavHeading'>
                        {/* <img src={catlogo} alt="Cat Logo" /> */}
                        <Link to="/"><h3>ALEASA AWAN</h3></Link>
                    </div>
                    <ul className='NavList'>
                        <li><Link to="/Projects" className='link'>Projects</Link></li>
                        <li><Link to="/Skills" className='link'>Skills</Link></li>
                        {/* <li><Link to="/Contact" className='link'>Contact</Link></li> */}
                    </ul>
                </div>
            </div>
     </div>
   );
 };
 
 export default Navbar;