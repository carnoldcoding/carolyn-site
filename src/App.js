import './App.css';
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'
import FooterSection from './components/FooterSection';
import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import FormPage from './pages/FormPage'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Router>
        <Navbar toggle={toggle} isOpen={isOpen}/>
        <MobileNav toggle={toggle} isOpen={isOpen}/>

        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/form" element={<FormPage/>}/>
        </Routes>
        
        <FooterSection/>
      </Router>
    </div>
  );
}

export default App;
