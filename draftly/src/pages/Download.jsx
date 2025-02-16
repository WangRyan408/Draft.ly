
//styling
import '../css/Download.css';
import "../fonts/CabinSketch-Regular.ttf";
import "../fonts/VT323-Regular.ttf";

function Download() {
    return (
        <div className='fade-in'>
            <title>Download | Draftly</title>
            <h1 id='download-msg'>Download your resume now!</h1>
            <h2 id='thank-you-msg'>Thank you for using Draftly. :)</h2>
            <button>Download PDF</button>
        </div>
    );
}

export default Download;