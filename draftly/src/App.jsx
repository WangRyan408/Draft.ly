import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Builder from './pages/Builder.jsx';
import './App.css'
import Navbar from './components/Navbar.jsx';
import Loading from './pages/Loading.jsx';
import Download from './pages/Download.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Builder" element={<Builder />} />
          <Route path="/Loading" element={<Loading />} />
          <Route path="/Download" element={<Download />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
