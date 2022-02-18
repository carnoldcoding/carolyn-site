import './App.css';
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CardSection from './components/CardSection';
import FooterSection from './components/FooterSection';
import {useState} from 'react'

import {information} from './components/AboutSection/data'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Navbar toggle={toggle} isOpen={isOpen}/>
      <MobileNav toggle={toggle} isOpen={isOpen}/>
      <HeroSection/>
      <AboutSection {...information}/>
      <CardSection />
      <FooterSection />
    </div>
  );
}

export default App;
