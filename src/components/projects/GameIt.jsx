import '../../components/moreinfo.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ProjectModal from './ProjectModal';

const GameIt = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

    const brief = [
        'CodeNation - Week 11-12: React JS Intermediate','',
        'Final project - group project','',
        'Making a full stack application with MERN/SERN', '', 
        '', 
        'My role:', '',
        '• All backend development - CRUD functions',
        `• Frontend - 'User Settings' - updating username, password` ,
        `• Frontend - functions for adding from 'Games Library' to 'My Games' page`,
        `• Frontend - 'My Games' page and components`,
   ];
    const description =[
        'Game/it is a gaming library for gamers.', '',
        'It has the latest game news, and the user can save games that they are playing, completed, wanting and owned.'
    ];
    const stack = [
        'SERN',
        '',
        'SQL with Sequelize',
        'Express.js',
        'React.js',
        'Node.js',
    ];
    const frontend = [
        'Built with React', '',

        'Components:', '',
            '• Login page',
            '• Sign-up page',
            '• Logout',
            '• Updating username, password',
            '• Delete account','',
        
        'API:', '',
            '• RAWG (games library)','',
        
        'Functions:', '',
            '• Displays username when signed in',
            '• Adding games to your personal library (My Games) of games playing, completed, wanting and owned.',
            '• Displaying games in personal library of games playing, completed, wanting and owned using the API',
            '• Removing games from your personal library and auto-refresh',
            '• Search bar for games',
            '• Page pagination, filter',
    ];
    const backend = [
        'REST API built with Node.JS, Express.JS with a database layer with routes, middleware and controllers handling CRUD operations.','',

        'Controllers:', '',
            '• Login/Sign-up: using password hashing and generating JWT tokens',
            '• Update user information using password hashing',
            '• Delete user',
            `• Adding games to user's library`,
            `• Displaying user's personal gaming library` ,
            `• Removing games from user's library` ,
    ];
    const links = [
        { url: 'https://game-it-uk.netlify.app/' }, 
        { url: 'https://github.com/Ally-3/game-it-frontend' }, 
        { url: 'https://github.com/Ally-3/game-it-backend' }, 
    ];

    return (
        <div>

            <button className="openModal-button" onClick={openModal}>
                Game/it
            </button>

            <button className="openModal-button-2 small-screen small-info" onClick={openModal}>
                <span>
                    <li style={{ 
                        color: '#1C1C23', 
                        textAlign: 'center', 
                        fontStyle: 'italic',
                        fontFamily: 'Georgia, Times New Roman, Times, serif',
                    }}
                    >i</li>
                </span>
            </button>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Game/it Modal"
            >
                <div className='open-modal'>
                    <h4 className='project-modal-h4'>Game/it</h4>
                    <ProjectModal  
                        brief={brief.join('\n')} 
                        description={description.join('\n')}
                        stack={stack.join('\n')}
                        frontend={frontend.join('\n')}
                        backend={backend.join('\n')}
                        links={links.map((link, index) => (
                            <div className='allLinks' key={index}>
                              <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.url}
                              </a>
                            </div>
                        ))}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default GameIt;