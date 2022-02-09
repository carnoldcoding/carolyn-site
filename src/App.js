import './App.css';
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'
import {useState} from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Navbar toggle={toggle} isOpen={isOpen}/>
      <MobileNav toggle={toggle} isOpen={isOpen}/>
    </div>
  );
}

export default App;
