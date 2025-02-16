import { useNavigate } from 'react-router-dom';

//styling
import '../css/Download.css';
import "../fonts/CabinSketch-Regular.ttf";

function Download() {
    return (
        <div>
            <h1 id='download-msg'>Download your resume now!</h1>
            <h2 id='thank-you-msg'>Thank you for using Draftly. :)</h2>
            <button>Download PDF</button>
        </div>
    );
}

export default Download;