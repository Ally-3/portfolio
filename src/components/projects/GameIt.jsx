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
        'Making a full stack application with MERN/SERN',
    ];
    const description =[
        'Game/it is a gaming library for gamers. It has the latest game news, and the user can save games that they are playing, completed, wanting and owned.'
    ];
    const stack = [
        'SERN',
        '',
        'SQL with Sequelize - database',
        'Express.js - Node.js web framework',
        'React.js - a client-side JavaScript framework',
        'Node.js - the premier JavaScript web server',
    ];
    const frontend = [
        'Built with React', '',

        'Components:',
            '• Login page',
            '• Sign-up page',
            '• Logout',
            '• Updating username, password',
            '• Delete account','',
        
        'API:', 
            '• RAWG (games library)','',
        
        'Dynamic information:',
            '• Displays username when signed in',
            '• Adding games to your personal library of games playing, completed, wanting and owned.',
            '• Displaying games in personal library of games playing, completed, wanting and owned using the API',
            '• Removing games from your personal library and auto-refresh',
            '• Search bar for games',
            '• Page pagination, filter',
    ];
    const backend = [
        'REST API built with Node, Express with a database layer with routes, middleware and controllers handing CRUD operations.','',

        'Controllers:',
            '• Login/Sign-up: using password hashing and generating JWT tokens',
            '• Update user information using password hashing',
            '• Delete user',
            `• Adding games to user's library`,
            `• Displaying user's personal gaming library` ,
            `• Removing games from user's library` ,
    ];
    const links = [
        'Netlify',
        'Render',
        'GitHub - frontend and backend',
    ];

    return (
        <div>

            <button className="openModal-button" onClick={openModal}>
                Game/it
            </button>

            <button className="openModal-button-2 small-screen" onClick={openModal}>
                <li className='small-info'>i</li>
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
                        links={links.join('\n')}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default GameIt;