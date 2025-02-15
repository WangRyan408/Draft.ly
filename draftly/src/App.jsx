import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Builder from './pages/Builder.jsx';
import './App.css'
import Navbar from './components/Navbar.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Builder" element={<Builder />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
