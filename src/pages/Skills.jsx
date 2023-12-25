import '../App.css';
// import './pages.css';
import '../components/moreinfo.css'

const Skills = () => {

    return (
        <div>
            <div className='skills-container'>
                <div className='skills-box1'>
                    <h3 className='skills-h3'>SKILLS</h3>
                        <h4>PRESENTLY</h4>
                        <h4>25-SEP-23 to 15-DEC-23</h4>
                            <h5>CodeNation - Software Bootcamp</h5>    
                        <h4>12-JUNE-23 to 12-OCT-23</h4>
                            <h5>AWH - Criminal Secretary</h5>   
                        <h4>19-SEP-16 to 01-JUN-23</h4>
                            <h5>HMRC - Admin Officer</h5>
                </div>
                <br />
                <div className='skills-box2'>
                    <ul>
                        <h3>MORE INFO</h3>
                        <li>Software Bootcamp</li>
                        <li>Criminal Secretary</li>
                        <li>HMRC - Admin Officer</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;