import '../../components/moreinfo.css';
import React, { useState } from 'react';
import Modal from 'react-modal';

const CatsEcom= () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

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
                    <h4>Cats e-commerce</h4>
                </div>
            </Modal>
        </div>
    );
};

export default CatsEcom;