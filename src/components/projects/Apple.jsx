import '../../components/moreinfo.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ProjectModal from './ProjectModal';

const Apple= () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

    const brief = ['CodeNation - Week 1: Website Clone'];
    const description =['A clone of the Apple homepage'];
    const stack = ['Frontend only: Basic HTML/CSS and JavaScript'];
    const frontend = ['Using new skills of HTML and CSS'];
    const backend = ['N/A as frontend only'];
    const links = [
        'Netlify',
        'GitHub - frontend and backend',
    ];

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                {/* <li>Apple Clone</li> */}
            </button>
            <button className="openModal-button-2 small-screen" onClick={openModal}>
                <li className='small-info'>i</li>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Apple Clone Modal"
            >
                <div className='open-modal'>
                    <h4 className='project-modal-h4'>Apple Clone</h4>
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

export default Apple;