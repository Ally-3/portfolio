import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../components/moreinfo.css'

const HMRC = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

    const cvData = [
        {
            skill: 'Decision making and effective communication:',
            info: ` Working pre-appeals stage, where the claimant has asked us to look at our decision again, case details are reviewed, and outcome relayed clearly to claimant either verbally or in writing. Doing work to the highest quality, confirmed by manager quality checks.`,
        },
        {
            skill: 'Flexibility:',
            info: `Dealing with changes to work tasks and learning quickly, for example during covid there was a national emergency as people could not work and I was immediately assigned to the CJRS helpline. Achieved certificate for suggesting improvement to call guide.`,
        },
        {
            skill: 'Time management:',
            info: `Working post items by our 42 day timescale. Nominated for a recognition award for clearing a backlog, allowing efficient service by keeping with processing times`,
        },
        {
            skill: 'Reviewing and understanding:',
            info: `Sifting correspondence via our digital mail service, sending mail to correct team. Requesting specific information from the customer to help support decision making.`,
        },
        {
            skill: 'Planning and mentoring:',
            info: `Gave support in the office to colleagues new to a task, gave feedback to management for plan of action as to what further training needs to be delivered based on feedback and noticing common gaps in knowledge/skill`,
        },
    ];

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                {/* <li>HMRC - Admin Officer</li> */}
            </button>
            <button className="openModal-button-2 small-screen" onClick={openModal}>
                <li className='small-info'>i</li>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="HMRC - Admin Officer Modal"
            >
                <div className='open-modal'>
                    <div>
                        <h3 className='modal-h3'>HMRC - Admin Officer</h3>
                        <h3 className='modal-h3'>19 SEP 2016 to 01 JUN 2023</h3>
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

export default HMRC;