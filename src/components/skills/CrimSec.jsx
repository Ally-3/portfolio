import '../../components/moreinfo.css';
import React, { useState } from 'react';
import Modal from 'react-modal';

const CrimSec = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

    const cvData = [
        {
            skill: `Proficient with the Office Suite (Word, Excel, Outlook)`,
            info: `Preparation of correspondence and documents through audio typing and word processing`,
        },
        {
            skill: 'Telephony',
            info: 'Liaising with clients and Solicitors in person and by telephone',
        },
        {
            skill: 'Organisation skills',
            info: 'Daily filing including file opening, closing, storage and retrieval of client files. And maintaining diaries for Solicitors',
        },
        {
            skill: '',
            info: '',
        },
    ];

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                Criminal Secretary
            </button>
            <button className="openModal-button-2 small-screen" onClick={openModal}>
                <li className='small-info'>i</li>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Criminal Secretary Modal"
            >
                <div className='open-modal'>
                    <div>
                        <h3 className='modal-h3'>Criminal Secretary</h3>
                        <h3 className='modal-h3'>12 JUNE 2023 to 12 OCT 2023</h3>
                        {cvData.map((cv, index) => (
                            <div key={index}>
                                <h4 className='modal-h4'>{cv.skill}</h4>
                                <h5 className='modal-h5'>{cv.info}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CrimSec;