import '../css/Builder.css';


function Builder() {
    return (
        <div>
            <div id='section-1'>
                <div class='title'>
                    Let's get started
                </div>
                <div class='description'>
                    Before we can make your resume, Draftly needs to know a bit about you.
                </div>
                <div class='title'>
                    ↓
                </div>
            </div>
            <div id='section-2'>
                <div class='build-label'>
                    Your Information
                </div>
                
                <div class='build-label'>
                    Your Experience
                </div>

                <div class='build-label'>
                    Job Description
                </div>
            </div>
        </div>
    );
}

export default Builder;