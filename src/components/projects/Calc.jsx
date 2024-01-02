import '../../components/moreinfo.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ProjectModal from './ProjectModal';

const Calc= () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

    const brief = [
        'CodeNation - Week 5: React JS Fundamentals', '',
        'Making a calculator',
    ];
    const description =['A calculator made in React'];
    const stack = ['Front-end only: React'];
    const frontend = [
        'Built with React', '',
    
        'API:', '',
            '• MathJS library','',

        'Functions:', '',
            '• Calculates values based on keys pressed',
    ];
    const backend = ['N/A'];
    const links = [
        { url: 'https://calculator-ally.netlify.app/' }, 
        { url: 'https://github.com/Ally-3/Calculator' }, 
    ];

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                Calculator
            </button>
            <button className="openModal-button-2 small-screen" onClick={openModal}>
                <li className='small-info'>i</li>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Calculator Modal"
            >
                <div className='open-modal'>
                    <h4 className='project-modal-h4'>Calculator</h4>
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

export default Calc;