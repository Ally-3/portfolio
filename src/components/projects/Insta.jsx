import '../../components/moreinfo.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ProjectModal from './ProjectModal';

const Insta= () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

    const brief = [
        'CodeNation - Week 10: React JS Clone','',

        'Creating an Instagram like clone that utilises a photo API as a source of photos. Making practice of React skills as well as ability to connect to a back end server using the Fetch method.  Also, hosting the app on Netlify.',
    ];
    const description =['A clone of Instagram login and Instagram page'];
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
            '• Logout', '',
        
        'API:', 
            '• Picsum - images library','',
        
        'Dynamic information:',
            '• Changes to navbar when signed in',
            '• Clicking through reels and post etc',
            '• Displaying images using the API',
    ];
    const backend = [
        'REST API built with Node, Express with a database layer with routes, middleware and controllers handing CRUD operations.','',

        'Controllers:',
            '• Login/Sign-up: using password hashing and generating JWT tokens',
    ];
    const links = [
        'Netlify',
        'Render',
        'GitHub - frontend and backend',
    ];

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                {/* <li>Insta Clone</li> */}
            </button>
            <button className="openModal-button-2 small-screen" onClick={openModal}>
                <li className='small-info'>i</li>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Insta Clone Modal"
            >
                <div className='open-modal'>
                    <h4 className='project-modal-h4'>Insta Clone</h4>
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

export default Insta;