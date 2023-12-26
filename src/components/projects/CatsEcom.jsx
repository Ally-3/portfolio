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

        `API's:`, 
            '• CATS API - cat library',
            '• Faker - faker library','',
        
        'Dynamic information:',
            '• Adding cats to basket',
            '• Removing cat from basket',
            '• Displaying images using the API',
            `• Displays 'in basket' when cat is added to basket`,
    ];
    const backend = ['N/A as frontend only'];
    const links = [
        'Netlify',
        'GitHub - frontend and backend',
    ];

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                <li>Cats e-commerce</li>
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
                        links={links.join('\n')}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default CatsEcom;