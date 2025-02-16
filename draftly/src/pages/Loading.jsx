import { useNavigate } from 'react-router-dom';

//styling
import '../css/Loading.css';
import "../fonts/CabinSketch-Regular.ttf";
import logo from '../assets/loading.gif';
import airplane from '../assets/paper_airplane.gif';

function Loading() {
    return (
        <div>
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