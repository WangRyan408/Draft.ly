import { useNavigate } from 'react-router-dom';

//styling
import '../css/Home.css';
import "../fonts/CabinSketch-Regular.ttf";
import "../fonts/VT323-Regular.ttf";

//images
import logo from '../assets/logo_draft.png';
import wordmark from '../assets/wordmark.png';

function Home() {

    const navigate = useNavigate();

    return (
        <div id='home' className='fade-in'>
            <title>Home | Draftly</title>
            <div id='landing-page'>
                <br></br>
                <div id='landing-page-image'>
                    <img src={wordmark}></img>
                </div>
            </div>

            <div id='section-2'>
                <h2 id='subtext-1'>Custom resume generation on a job-by-job basis.</h2>
                <button id='get-started' onClick={() => navigate('/Builder')}>Get started</button>
            </div>

            <div id='section-3'>

                <h2>Generate your resume in three easy steps.</h2>

                <div id='main-boxes-wrapper'>
                    <div className="card">
                        <div>
                            Step 1
                                <div className="card-desc">
                                    Enter your information.
                                </div>
                                <div className="card-image">
                                    <img src={logo}></img>
                                </div>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Step 2
                                <div className="card-desc">
                                    Enter job description.
                                </div>
                                <div className="card-image">
                                    <img src={logo}></img>
                                </div>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Step 3
                                <div className="card-desc">
                                    Generate your resume!
                                </div>
                                <div className="card-image">
                                    <img src={logo}></img>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );




}

export default Home;