import { useNavigate } from 'react-router-dom';

import '../css/Home.css';
import logo from '../assets/logo_draft.png';
import wordmark from '../assets/wordmark.png';



function Home() {

    const navigate = useNavigate();


    return (
        <div id='home'>

            <div id='landing-page'>
                <h1 id='title'>Welcome to Draft.ly</h1>
                <br></br>
                <div id='landing-page-image'>
                    <img src={wordmark}></img>
                </div>
            </div>

            <div id='section-2'>
                <h2 id='subtext-1'>Custom resume generation on a job-by-job basis</h2>
                <button id='get-started' onClick={() => navigate('/Builder')}>Get started</button>
            </div>

            <div id='section-3'>

                <h2>Generate your resume in three easy steps</h2>

                <div id='main-boxes-wrapper'>
                    <div class="card">
                        <div>
                            Step 1
                                <div class="card-desc">
                                    Enter your information
                                </div>
                                <div class="card-image">
                                    <img src={logo}></img>
                                </div>
                        </div>
                    </div>
                    <div class="card">
                        <div>
                            Step 2
                                <div class="card-desc">
                                    Enter job description
                                </div>
                                <div class="card-image">
                                    <img src={logo}></img>
                                </div>
                        </div>
                    </div>
                    <div class="card">
                        <div>
                            Step 3
                                <div class="card-desc">
                                    Generate your resume!
                                </div>
                                <div class="card-image">
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