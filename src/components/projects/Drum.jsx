import '../../components/moreinfo.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ProjectModal from './ProjectModal';

const Drum = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

    const brief = [
        'CodeNation - Week 3: JS DOM', '',
        'Making a Drum Kit with onClick/onPress commands',
    ];
    const description =['A Drum Kit App'];
    const stack = ['Frontend only: Basic HTML/CSS and JavaScript'];
    const frontend = [
        'Functionality:',
            '• Keypress function',
    ];
    const backend = ['N/A as frontend only'];
    const links = [
        'Netlify',
        'GitHub - frontend and backend',
    ];

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                <li>Drum Kit</li>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Drum Kit Modal"
            >
                <div className='open-modal'>
                    <h4 className='project-modal-h4'>Drum Kit</h4>
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

export default Drum;