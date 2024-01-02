import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {

    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <div>
            <div className='NavContainer'>
                <div className='NavWrapper'>
                    <div className='NavHeading'>
                        <Link to="/" className={`header ${activeLink === 0 ? 'active' : ''}`} onClick={() => handleLinkClick(0)}>
                            <h3>{'<'}ALEASA AWAN{' />'}</h3></Link>
                    </div>
                    <ul className='NavList'>
                    <li>
                        <Link
                            to="/Projects"
                            className={`link ${activeLink === 1 ? 'active' : ''}`}
                            onClick={() => handleLinkClick(1)}
                        >
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Skills"
                            className={`link ${activeLink === 2 ? 'active' : ''}`}
                            onClick={() => handleLinkClick(2)}
                        >
                            ABOUT ME
                        </Link>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
   );
 };
 
 export default Navbar;