import React, { useState } from 'react';
import '../App.css';
import GitHub from '../images/github1.png';
import LinkedIn from '../images/linkedin.png';

const Contact = () => {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const emailBody = `Name: \nOrganisation: \nEmail: ${email} \nPhone: \n\nMessage: \n\n`;
        
        // Open the default email client with a pre-filled email
        window.open(`mailto:aleasaawan@gmail.com?subject=Code-Portfolio&body=${encodeURIComponent(emailBody)}`);
      
        // Log form submission
        console.log('Form submitted:', email);

        // Reset the email input to its default placeholder
        setEmail('');
    };
      
    
    return (
        <div>
            <div className='FootContainer'>
                <div className='FootWrapper'>
                    <div className='NavHeading'>
                        <div className='social-column'>
                            <h3>GET IN TOUCH</h3><br />
                            <div className='contact-email'>
                                <form onSubmit={handleSubmit} className="form-container">
                                    <label>
                                        <input
                                            className="emailbox"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            required
                                            onChange={handleChange}
                                        />
                                    </label>
                                        <input className="submit-next" type="submit" value="Next" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='social-links'>
                        <a 
                            href="https://github.com/Ally-3"         
                            target="_blank" 
                            rel="noopener noreferrer"
                        > 
                            <img className="social-button" src={GitHub} alt='github' />
                        </a>
                        <a  
                            href="https://linkedin.com/in/aleasa-aleasa"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <img className="social-button" src={LinkedIn} alt='linkedin' />
                        </a>
                    </div>
                </div>
            </div>
     </div>
   );
 };
 
 export default Contact;