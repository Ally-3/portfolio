import '../../components/moreinfo.css';
import React, { useState } from 'react';
import Modal from 'react-modal';

const SoftwareBC = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

    const cvData = [
        {
            skill: 'Full stack web application development',
            find: `See Game-it and Insta Clone`,
            info:  (
                <>
                SERN stack <br />
                Use of CRUD and controllers/middleware/routes on backend <br />
                Login page/updating user/pagination/API fetch on frontend <br />
                Dynamic display
                </>
            ),               
        },
        {
            skill: `Use of Third-party APIs`,
            find: `See Game-it and Cats e-commerce`,
            info: `Fetching data from the API to return and display info such as images onto the webpage`,
        },
        {
            skill: 'Working with databases such as MySQL and MongoDB',
            find: `See Game-it and Insta Clone`,
            info: `Using clever-cloud for managing SQL database, and Render to host the backend`,
        },
        {
            skill: `Modern JavaScript UI libraries - React.js`,
            find: `See Calculator, Game-it, Insta Clone, Cats e-commerce`,
            info: `Making use of reusable components`,
        },
        {
            skill: 'Fundamental coding principles using JavaScript, HTML & CSS',
            find: `See Apple Clone, Drum Kit and Calculator`,
            info: `Formatting webpage with specific instruction on an element`,
        },
        {
            skill: 'Utilising timesheets - Trello',
            find: `Use of Trello on Game-it project`,
            info: `Involving working collaboratively`,
        },

    ];

    return (
        <div>
            <button className="openModal-button" onClick={openModal}>
                <li>Software Bootcamp</li>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Software Bootcamp Modal"
            >
                <div className='open-modal'>
                    <div>
                        <h3 className='modal-h3'>CodeNation - Software Bootcamp</h3>
                        <h3 className='modal-h3'>25 SEP 2023 to 15 DEC 2023</h3>
                        {cvData.map((cv, index) => (
                            <div key={index}>
                                <h4 className='modal-h4'>{cv.skill}</h4>
                                <h5 className='modal-find'>{cv.find}</h5>
                                <h5 className='modal-h5'>{cv.info}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default SoftwareBC;