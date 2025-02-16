import { useNavigate } from 'react-router-dom';

//styling
import '../css/Loading.css';
import "../fonts/CabinSketch-Regular.ttf";
import "../fonts/VT323-Regular.ttf";
import logo from '../assets/loading.gif';
import airplane from '../assets/paper_airplane.gif';

function Loading() {
    return (
        <div className='fade-in'>
            <title>Loading... | Draftly</title>
            <div id='loading-page'>
            <img src={logo} alt="loading..." />
            </div>
            <div id='airplane-gif'>
                <img src={airplane} alt="airplane" />
            </div>
        </div>
    );
}

export default Loading;