import '../../components/moreinfo.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ProjectModal from './ProjectModal';

const CatsEcom= () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

    const brief = [
        'CodeNation - Week 6: React JS Intermediate', '',
        'Making a e-commerce website - buying cats',
    ];
    const description =['A cats e-commerce website using a third party library (CATS API) for information'];
    const stack = ['Front-end only: React'];
    const frontend = [
        'Built with React', '',

        `API's:`, '',
            '• CATS API - cat library',
            '• Faker - faker library','',
        
        'Functions:', '',
            '• Adding cats to basket',
            '• Removing cat from basket',
            '• Displaying images using the API',
            `• Displays 'in basket' when cat is added to basket`,
    ];
    const backend = ['N/A'];
    const links = [
        { url: 'https://purrfect-planet.netlify.app/' }, 
        { url: 'https://github.com/Ally-3/cats-ecommerce' }, 
    ];

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                Cats e-commerce
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
                contentLabel="Cats e-commerce Modal"
            >
                <div className='open-modal'>
                    <h4 className='project-modal-h4'>Cats e-commerce</h4>
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

export default CatsEcom;