import { useNavigate } from 'react-router-dom';

import '../css/Home.css';


function Home() {

    const navigate = useNavigate();


    return (
        <div id='home'>
        
            <div id='landing-page'>
                <h1 id='title'>Welcome to Draft.ly</h1>
            </div>
            <div id='section-2'>
                <h2 id='subtext-1'>Custom Resume Generation on a job by job basis</h2>
                <button id='get-started' onClick={() =>navigate('/Builder')}>Get Started</button>
            </div>
            <div id='section-3'>
                <div>Generate your resume in 3 easy steps</div>
                <div id='stepboxes'>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );




}



export default Home;
