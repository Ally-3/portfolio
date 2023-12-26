import '../../components/moreinfo.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ProjectModal from './ProjectModal';

const CatsEcom= () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

    const brief = 'something';
    const description ='hello';
    const stack = 'fhh';
    const frontend = 'hgfj';
    const backend = 'N/A as frontend only';
    const links = 'gfd h';

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
                        brief={brief} 
                        description={description}
                        stack={stack}
                        frontend={frontend}
                        backend={backend}
                        links={links}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default CatsEcom;