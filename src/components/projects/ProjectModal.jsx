import React, { useState } from 'react';
import '../../components/moreinfo.css';

const ProjectModal = (props) => {
    const [activeSection, setActiveSection] = useState('BRIEF');

    const handleItemClick = (section) => {
        setActiveSection(section);
    };

    const sections = ['BRIEF', 'DESCRIPTION', 'STACK', 'FRONTEND', 'BACKEND', 'HOST'];

    const headingSection = (section) => (
        <li
        key={section}
        onClick={() => handleItemClick(section)}
        className={activeSection === section ? 'make-bold' : ''}
        >
        {section}
        </li>
    );

    const renderContent = () => {
        switch (activeSection) {
        case 'BRIEF':
            return <div>{props.brief}</div>;
        case 'DESCRIPTION':
            return <div>{props.description}</div>;
        case 'STACK':
            return <div>{props.stack}</div>;
        case 'FRONTEND':
            return <div>{props.frontend}</div>;
        case 'BACKEND':
            return <div>{props.backend}</div>;
        case 'HOST':
            return <div>{props.links}</div>;
        default:
            return null;
        }
    };

    return (
        <div className='modal-container'>
            <div className='modal-parent'>
                <ul>{sections.map(headingSection)}</ul>
            </div>
                <div className='modal-child'>                
                    {renderContent()}
                </div>
        </div>
    );
};

export default ProjectModal;
