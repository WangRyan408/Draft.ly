import '../css/Builder.css';


function Builder() {
    return (
        <div>
            <div id='section-1'>
                <div class='title'>
                    Let's get started
                </div>
                <div class='description'>
                    Before perfecting your resume, Draftly needs to know a bit about you.
                </div>
                <div class='title'>
                    ↓
                </div>
            </div>
            <div id='builder-section-2'>
                <div class='build-label'>
                    Your Information
                </div>
                <div class='builder-input-wrapper-2'>
                    <input type='text' placeholder='First name'/>
                    <input type='text' placeholder='Last name'/>
                    <input type='text' placeholder='City'/>
                    <input type='text' placeholder='State (ex: CA)'/>
                </div>

                <br></br>

                <div class='build-label'>
                    Your Education
                </div>
                <div class='builder-input-wrapper-1'>
                    <input type='text' placeholder='School, college, or university name'/>
                </div>
                <div class='builder-input-wrapper-2'>
                    <input type='text' placeholder='Start year (ex: 2022)'/>
                    <input type='text' placeholder='End year (ex: 2026)'/>
                </div>

                <br></br>

                <div class='build-label'>
                    Your Projects
                </div>
                <div class='builder-input-wrapper-1'>
                    <input type='text' placeholder='Project title'/>
                </div>
                <div class='builder-input-wrapper-2'>
                    <input type='text' placeholder='Start month and year (ex: Jun. 2024)'/>
                    <input type='text' placeholder='End month and year (ex: Aug. 2024)'/>
                </div>
                <div class='builder-input-wrapper-1'>
                    <input type='text' placeholder='What you did...'/>
                </div>

                <br></br>

                <div class='build-label'>
                    Job Description
                </div>
                <div class='builder-input-wrapper-1'>
                    <input class='job-desc' type='text' placeholder="Copy and paste the description of the job you're applying to!"/>
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