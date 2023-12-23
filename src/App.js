import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills /> } />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
