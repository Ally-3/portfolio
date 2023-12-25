import '../../components/moreinfo.css';
import React, { useState } from 'react';
import Modal from 'react-modal';

const Calc= () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                <li>Calculator</li>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Calculator Modal"
            >
                <div className='open-modal'>
                    <h4>Calculator</h4>
                </div>
            </Modal>
        </div>
    );
};

export default Calc;