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
    const stack = ['Frontend only: HTML/CSS and JavaScript'];
    const frontend = ['Using new skills of HTML and CSS'];
    const backend = ['N/A'];
    const links = [
        { url: 'https://apple-clone-ally.netlify.app/' }, 
        { url: 'https://github.com/Ally-3/Apple-clone' }, 
    ];

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                Apple Clone
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

export default Apple;