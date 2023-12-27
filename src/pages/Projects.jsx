import '../App.css';
import './pages.css';
// import Modal from 'react-modal';
import React, { useState } from 'react';

import game from '../images/game-l.png';
import cats from '../images/cats-m.png';
import insta from '../images/insta-s.png';
import apple from '../images/apple-l.png';
import calc from '../images/calc-s.png';
import drum from '../images/drum-s.png';
import GitHub from '../images/github1.png';

import GameIt from '../components/projects/GameIt';
import CatsEcom from '../components/projects/CatsEcom';
import Insta from '../components/projects/Insta';
import Calc from '../components/projects/Calc';
import Drum from '../components/projects/Drum';
import Apple from '../components/projects/Apple';


const Projects = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    // const closeModal = () => {setModalIsOpen(false);};

    const projectsData = [
        { name: 'Game/it', info: GameIt, git:'https://github.com/Ally-3/game-it-frontend', href: 'https://game-it-uk.netlify.app/', image: game, stack: 'Fullstack - Group project', using: 'React, Express.js, SQL' },

        { name: 'Cats e-commerce', info: CatsEcom, git:'https://github.com/Ally-3/cats-ecommerce', href: 'https://purrfect-planet.netlify.app/', image: cats, stack: 'Frontend', using: 'React' },

        { name: 'Insta Clone', info: Insta, git:'https://github.com/Ally-3/instaclone', href: 'https://insta-clone-m52.netlify.app/', image: insta, stack: 'Fullstack', using: 'React, Express.js, SQL' },

        { name: 'Calculator', info: Calc, git:'https://github.com/Ally-3/Calculator', href: 'https://calculator-ally.netlify.app/', image: calc, stack: 'Frontend', using: 'React' },

        { name: 'Drum Kit', info: Drum, git:'https://github.com/Ally-3/Drumkit', href: 'https://drum-kit-ally.netlify.app/', image: drum, stack: 'Frontend', using: 'HTML/CSS, Javascript' },

        { name: 'Apple Clone', info: Apple, git:'https://github.com/Ally-3/Apple-clone', href: 'https://apple-clone-ally.netlify.app/', image: apple, stack: 'Frontend', using: 'HTML/CSS' },
      ];

    return (
        <div>
            <div className='pages-container'>
                <div className='pages-box1'>
                <h3>PROJECTS</h3>
                    <div className='box1-parent'>
                        {projectsData.map((project, index) => (
                            <div className='box1-child' key={index}>
                                <a
                                    href={project.href}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                <img src={project.image} alt={project.name} className='glow' />
                                </a>
                                <div className='h4-row'>
                                    <h4>{project.name}</h4>
                                    <div>
                                        <div className='hide-info'>{project.info && (<project.info />)}</div>

                                        <a 
                                            href={project.git}       
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        > 
                                            <img className="git-button" src={GitHub} alt='github' />
                                        </a>
                                    </div>
                                </div> 
                                <h5>{project.stack}</h5>
                                <h5>{project.using}</h5><br />
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <div className='pages-box2'>
                    <ul>
                        <h3>MORE INFO</h3>
                        <button className="openModal-button" onClick={openModal} modalIsOpen={modalIsOpen} >
                            <li>Game/it <GameIt /></li>
                            <li>Cats e-commerce<CatsEcom /></li>
                            <li>Insta Clone<Insta /></li>
                            <li>Calculator<Calc /></li>
                            <li>Drum Kit<Drum /></li>
                            <li>Apple Clone<Apple /></li>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;