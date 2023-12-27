import '../App.css';
import './pages.css';
import React from 'react';
import '../components/moreinfo.css';

import CrimSec from '../components/skills/CrimSec';
import HMRC from '../components/skills/HMRC';
import SoftwareBC from '../components/skills/SoftwareBC';

const Skills = () => {

    const skillsData = [
        { 
            date: 'PRESENTLY',
            info: `Looking for a change of industry. Joined education provider 'Code Nation' to learn software development in order to learn new skills in tech and secure a new job role within the tech industry.`,
        },
        { 
            date: '25 SEP 2023 to 15 DEC 2023',
            job: 'CodeNation - Software Bootcamp',
            hard_skills: 'FULLSTACK, HTML/CSS, JAVASCRIPT, NODE.JS, EXPRESS.JS, REACT, SQL, MONGO DB',
            soft_skills: '',
            info: `Joined the 12-week Master Software Development Skills Bootcamp. Equivalent to a Level 3 qualification, the learning provided an understanding of front-end and back-end languages, and learning how to build full-stack applications.`,
            more: SoftwareBC,
        },
        { 
            date: '12 JUNE 2023 to 12 OCT 2023',
            job: 'AWH - Criminal Secretary',
            hard_skills: '',
            soft_skills: `Audio typing, writing to clients via letter or email, contacting police/CPS`,
            info: `Wanted to expand my skill-set and work in a new 
            environment within the criminal sector for interest.`,
            more: CrimSec,
        },
        { 
            date: '19 SEP 2016 to 01 JUN 2023',
            job: 'HMRC - Admin Officer',
            hard_skills: '',
            soft_skills: `Decision making and effective communication, flexibility, time management, reviewing and understanding, planning and mentoring`,
            info: `Worked in the customer services sector. My roles included admin services, customer service and pre-appeals.`,
            more: HMRC,
        },
    ];

    return (
        <div>
            <div className='skills-container'>
                <div className='skills-box1'>
                    <h3 className='skills-h3'>SKILLS AND EMPLOYMENT</h3>
                        {skillsData.map((skills, index) => (
                        <div key={index}>
                            <h4 className='skills-date'>{skills.date}</h4>
                            <h5 className='skills-job'>{skills.job}</h5>
                            <h5 className='skills-hard'>{skills.hard_skills}</h5>
                            <h5 className='skills-soft'>{skills.soft_skills}</h5>
                            <h5 className='skills-info'>{skills.info}</h5>
                            <div className='hide-info'>{skills.more && (<skills.more />)}</div>
                        </div>
                        ))}
                </div>
                <br />
                <div className='pages-box2'>
                    <ul>
                        <h3>MORE INFO</h3>
                        <div >
                            <p><SoftwareBC /></p>
                            <p><CrimSec /></p>
                            <p><HMRC /></p>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;