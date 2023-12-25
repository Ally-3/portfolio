import '../../components/moreinfo.css';
import React, { useState } from 'react';
import Modal from 'react-modal';

const GameIt = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                <li>Game\it</li>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Game/it Modal"
            >
                <div className='open-modal'>
                    <h4>Game/it</h4>
                </div>
            </Modal>
        </div>
    );
};

export default GameIt;