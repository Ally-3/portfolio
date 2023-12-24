import '../App.css';
import './pages.css';
import game from '../images/game-l.png';
import cats from '../images/cats-s.png';
import insta from '../images/insta-s.png';
import apple from '../images/apple-l.png';
import calc from '../images/calc-s.png';
import drum from '../images/drum-s.png';

const Projects = () => {

    const projectsData = [
        { name: 'Game/it', image: game, stack: 'Fullstack - Group project', using: 'React, Express.js, SQL' },
        { name: 'Cats e-commerce', image: cats, stack: 'Frontend', using: 'React' },
        { name: 'Insta Clone', image: insta, stack: 'Fullstack', using: 'React, Express.js, SQL' },
        { name: 'Calculator', image: calc, stack: 'Frontend', using: 'React' },
        { name: 'Drum Kit', image: drum, stack: 'Frontend', using: 'HTML/CSS, Javascript' },
        { name: 'Apple Clone', image: apple, stack: 'Frontend', using: 'HTML/CSS' },
      ];

    return (
        <div>
            <div className='pages-container'>
                <div className='pages-box1'>
                <h3>PROJECTS</h3>
                    <div className='box1-parent'>
                        {projectsData.map((project, index) => (
                            <div className='box1-child' key={index}>
                                <img src={project.image} alt={project.name} />
                                <h4>{project.name}</h4>
                                <h5>{project.stack}</h5>
                                <h5>{project.using}</h5>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <div className='pages-box2'>
                    <ul>
                        <h3>MORE INFO</h3>
                        <li>Game\it</li>
                        <li>Cats e-commerce</li>
                        <li>Insta Clone</li>
                        <li>Calculator</li>
                        <li>Drum Kit</li>
                        <li>Apple Clone</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;