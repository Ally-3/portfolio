import '../App.css';
import React, { useEffect } from 'react';

const Landing = () => {
    
    useEffect(() => {
        // Get the height of the entire page
        const pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    
        // Scroll to the bottom of the page
        window.scrollTo(0, pageHeight);
    }, []); // The empty dependency array ensures this effect runs only once on mount
    
    return (
        <div className='App-l'>
            <div className='body-container-l'>
                <div className='text-container-l'>
                    <p className='landing-text'>
                        <span className='welcome-text'>Welcome to My Coding Portfolio:</span>
                        <br /><br />
                        <span className='subtext'>
                            Fullstack Applications |{' '}
                            <span className='highlight-text'>Seeking Junior Developer Role</span>
                        </span>
                    </p>
                    <h1 className='title'>{`<`}ALEASA</h1>
                    <h1 className='title'>AWAN{` />`}</h1>
                </div>
            </div>
        </div>
    );
};

export default Landing;