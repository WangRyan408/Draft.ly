import '../css/About.css';
import placeholder from '../assets/placeholder_guy.jpg';

function About() {
    return (
        <div>
            <div id='section-1'>
                <h1>Why Draftly?</h1>
            </div>
            <div id='section-2'>
                Draftly makes it easy to tailor your resume based on job requirements.
                <br></br>
                Just input your skills and experience and Draftly will do the rest.
            </div>
            <div id='devs-wrapper'>
                <h2>Developers</h2>
                <div id='devs-wrapper-cards'>
                    <div className='card'>
                        <div className='name'>Wilfredo Concepion</div>
                        <div className='image'>
                            <img src={placeholder}></img>
                        </div>
                        <div className='role'>Front-end designer</div>
                    </div>
                    <div className='card'>
                        <div className='name'>Andre Dinh</div>
                        <div className='image'>
                            <img src={placeholder}></img>
                        </div>
                        <div className='role'>Front-end designer</div>
                    </div>
                    <div className='card'>
                        <div className='name'>Marl Jonson</div>
                        <div className='image'>
                            <img src={placeholder}></img>
                        </div>
                        <div className='role'>Front-end developer</div>
                    </div>
                    <div className='card'>
                        <div className='name'>Jay Torres</div>
                        <div className='image'>
                            <img src={placeholder}></img>
                        </div>
                        <div className='role'>Front-end developer</div>
                    </div>
                    <div className='card'>
                        <div className='name'>Jasmine Tu</div>
                        <div className='image'>
                            <img src={placeholder}></img>
                        </div>
                        <div className='role'>Front-end designer</div>
                    </div>
                    <div className='card'>
                        <div className='name'>Ryan Wang</div>
                        <div className='image'>
                            <img src={placeholder}></img>
                        </div>
                        <div className='role'>Back-end developer</div>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>

        </div>
    );
}

export default About;