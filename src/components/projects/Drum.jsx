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
    const stack = ['Frontend only: HTML/CSS and JavaScript'];
    const frontend = [
        'Functions:', '',
            '• Keypress and onClick function',
    ];
    const backend = ['N/A'];
    const links = [
        { url: 'https://drum-kit-ally.netlify.app/' }, 
        { url: 'https://github.com/Ally-3/Drumkit' }, 
    ];

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                Drum Kit
            </button>
            <button className="openModal-button-2 small-screen" onClick={openModal}>
                <li className='small-info'>i</li>
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

export default Drum;