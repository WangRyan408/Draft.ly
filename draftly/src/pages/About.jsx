import '../css/About.css';
import jellyfish from '../assets/icon_jellyfish.png';
import cat from '../assets/icon_cat.png';
import goose from '../assets/icon_goose.png';
import shiba from '../assets/icon_shiba.png';
import shrimp from '../assets/icon_shrimp.png';
import weiner_dog from '../assets/icon_weiner_dog.png';

function About() {
    return (
        <div>
            <div id='about-section-1'>
                Why Draftly?
            </div>
            <div id='about-section-2'>
                Draftly makes it easy to tailor your resume based on job requirements.
                <br></br>
                Just input your skills, projects, & experience, then Draftly will do the rest.
            </div>
            <div id='devs-wrapper'>
                <h1>Developers</h1>
                <div id='devs-wrapper-cards'>
                    <div className='card'>
                        <div className='name'>Wilfredo Concepion</div>
                        <div className='image'>
                            <img src={shiba}></img>
                        </div>
                        <div className='role'>Front-End Developer</div>
                    </div>
                    <div className='card'>
                        <div className='name'>Andre Dinh</div>
                        <div className='image'>
                            <img src={weiner_dog}></img>
                        </div>
                        <div className='role'>Front-End Developer</div>
                    </div>
                    <div className='card'>
                        <div className='name'>Marl Jonson</div>
                        <div className='image'>
                            <img src={jellyfish}></img>
                        </div>
                        <div className='role'>Front-End Developer</div>
                    </div>
                    <div className='card'>
                        <div className='name'>Jay Torres</div>
                        <div className='image'>
                            <img src={shrimp}></img>
                        </div>
                        <div className='role'>Front-End Developer, Designer</div>
                    </div>
                    <div className='card'>
                        <div className='name'>Jasmine Tu</div>
                        <div className='image'>
                            <img src={cat}></img>
                        </div>
                        <div className='role'>Front-End Developer, Designer</div>
                    </div>
                    <div className='card'>
                        <div className='name'>Ryan Wang</div>
                        <div className='image'>
                            <img src={goose}></img>
                        </div>
                        <div className='role'>Back-End Developer</div>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>

        </div>
    );
}

export default About;