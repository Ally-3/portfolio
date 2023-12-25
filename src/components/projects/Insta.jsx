import '../../components/moreinfo.css';
import React, { useState } from 'react';
import Modal from 'react-modal';

const Insta= () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                <li>Insta Clone</li>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Insta Clone Modal"
            >
                <div className='open-modal'>
                    <h4>Insta Clone</h4>
                </div>
            </Modal>
        </div>
    );
};

export default Insta;