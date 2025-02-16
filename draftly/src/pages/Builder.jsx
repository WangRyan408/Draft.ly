import '../css/Builder.css';
import arrow from '../assets/dashed_arrow_small.png';


function Builder() {
    return (
        <div className='fade-in'>
            <title>Builder | Draftly</title>
            <div id='section-1'>
                <div className='title'>
                    Let&apos;s get started
                </div>
                <div className='description'>
                    Before perfecting your resume, Draftly needs to know a bit about you.
                </div>
                <div id='arrow'>
                    <img src={arrow}></img>
                </div>
            </div>
            <div id='builder-section-2'>
                <div className='build-label'>
                    Your Information
                </div>
                <div className='builder-input-wrapper-2'>
                    <input type='text' placeholder='First name'/>
                    <input type='text' placeholder='Last name'/>
                    <input type='text' placeholder='City'/>
                    <input type='text' placeholder='State (ex: CA)'/>
                </div>

                <br></br>

                <div className='build-label'>
                    Your Education
                </div>
                <div className='builder-input-wrapper-1'>
                    <input type='text' placeholder='School, college, or university name'/>
                </div>
                <div className='builder-input-wrapper-2'>
                    <input type='text' placeholder='Start year'/>
                    <input type='text' placeholder='End year'/>
                </div>

                <br></br>

                <div className='build-label'>
                    Your Projects
                </div>
                <div className='builder-input-wrapper-1'>
                    <input type='text' placeholder='Project title'/>
                </div>
                <div className='builder-input-wrapper-2'>
                    <input type='text' placeholder='Start month, year (ex: Jun. 2024)'/>
                    <input type='text' placeholder='End month, year (ex: Aug. 2024)'/>
                </div>
                <div className='builder-input-wrapper-1'>
                    <input type='text' placeholder='Describe what you did...'/>
                </div>

                <br></br>

                <div className='build-label'>
                    Job Description
                </div>
                <div className='builder-input-wrapper-1'>
                    <input className='job-desc' type='text' placeholder="Copy and paste the description of the job you're applying to!"/>
                </div>

                <br></br>
                <br></br>

                <div id='submit'>
                    <input type='submit' />
                </div>

            </div>
        </div>
    );
}

export default Builder;