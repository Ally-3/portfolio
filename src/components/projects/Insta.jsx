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
        'SQL with Sequelize',
        'Express.js',
        'React.js',
        'Node.js',
    ];
    const frontend = [
        'Built with React', '',
       
        'Components:','',
            '• Login page',
            '• Sign-up page',
            '• Logout', '',
        
        'API:', '',
            '• Picsum - images library','',
        
        'Functions information:', '',
            '• Changes to navbar when signed in',
            '• Clicking through reels and post etc',
            '• Displaying images using the API',
    ];
    const backend = [
        'REST API built with Node, Express with a database layer with routes, middleware and controllers handing CRUD operations.','',
        '',
        'Controllers:', '',
            '• Login/Sign-up: using password hashing and generating JWT tokens',
    ];
    const links = [
        { url: 'https://insta-clone-m52.netlify.app/' }, 
        { url: 'https://github.com/Ally-3/instaclone-frontend' }, 
        { url: 'https://github.com/Ally-3/instaclone-backend' }, 
    ];

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                Insta Clone
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

export default Insta;