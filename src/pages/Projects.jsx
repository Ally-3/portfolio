import '../App.css';
import './pages.css';
import game from '../images/game-l.png';
import cats from '../images/cats-m.png';
import insta from '../images/insta-s.png';
import apple from '../images/apple-l.png';
import calc from '../images/calc-s.png';
import drum from '../images/drum-s.png';
import GameIt from '../components/projects/GameIt';
import CatsEcom from '../components/projects/CatsEcom';
import Insta from '../components/projects/Insta';
import Calc from '../components/projects/Calc';
import Drum from '../components/projects/Drum';
import Apple from '../components/projects/Apple';


const Projects = () => {

    const projectsData = [
        { name: 'Game/it', href: 'https://game-it-uk.netlify.app/', image: game, stack: 'Fullstack - Group project', using: 'React, Express.js, SQL' },
        { name: 'Cats e-commerce', href: '', image: cats, stack: 'Frontend', using: 'React' },
        { name: 'Insta Clone', href: '', image: insta, stack: 'Fullstack', using: 'React, Express.js, SQL' },
        { name: 'Calculator', href: '', image: calc, stack: 'Frontend', using: 'React' },
        { name: 'Drum Kit', href: '', image: drum, stack: 'Frontend', using: 'HTML/CSS, Javascript' },
        { name: 'Apple Clone', href: '', image: apple, stack: 'Frontend', using: 'HTML/CSS' },
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
                                <h4>{project.name}</h4>
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
                        <li><GameIt /></li>
                        <li><CatsEcom /></li>
                        <li><Insta /></li>
                        <li><Calc /></li>
                        <li><Drum /></li>
                        <li><Apple /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;