import '../../components/moreinfo.css';
import React, { useState } from 'react';
import Modal from 'react-modal';

const Drum = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

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
                    <h4>Drum Kit</h4>
                </div>
            </Modal>
        </div>
    );
};

export default Drum;