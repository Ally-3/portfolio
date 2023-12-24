import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Contact = () => {

   return (
        <div>
            <div className='FootContainer'>
                <div className='FootWrapper'>
                    <div className='NavHeading'>
                        <Link to="/"><h3>Contact</h3></Link>
                    </div>
                    <ul className='NavList'>
                        <li><Link to="/Contact" className='link'>Contact</Link></li>
                    </ul>
                </div>
            </div>
     </div>
   );
 };
 
 export default Contact;