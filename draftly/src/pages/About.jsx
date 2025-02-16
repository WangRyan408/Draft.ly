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
                    <div class='card'>
                        <div class='name'>Wilfredo Concepion</div>
                        <div class='image'>
                            <img src={placeholder}></img>
                        </div>
                        <div class='role'>Front-end designer</div>
                    </div>
                    <div class='card'>
                        <div class='name'>Andre Dinh</div>
                        <div class='image'>
                            <img src={placeholder}></img>
                        </div>
                        <div class='role'>Front-end designer</div>
                    </div>
                    <div class='card'>
                        <div class='name'>Marl Jonson</div>
                        <div class='image'>
                            <img src={placeholder}></img>
                        </div>
                        <div class='role'>Front-end developer</div>
                    </div>
                    <div class='card'>
                        <div class='name'>Jay Torres</div>
                        <div class='image'>
                            <img src={placeholder}></img>
                        </div>
                        <div class='role'>Front-end developer</div>
                    </div>
                    <div class='card'>
                        <div class='name'>Jasmine Tu</div>
                        <div class='image'>
                            <img src={placeholder}></img>
                        </div>
                        <div class='role'>Front-end designer</div>
                    </div>
                    <div class='card'>
                        <div class='name'>Ryan Wang</div>
                        <div class='image'>
                            <img src={placeholder}></img>
                        </div>
                        <div class='role'>Back-end developer</div>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>

        </div>
    );
}

export default About;