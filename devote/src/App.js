import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Read from './Components/Read/Read';
import Myths from './Components/Myths/Myths';
import About from './Components/About/About';
import Signin from './Components/Signin/Signin';
import Footer from './Components/Footer/Footer';

function App() {
  return (
  <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Read" element={<Read />} />
        <Route path="/Myths" element={<Myths />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
      <Footer/>
    </Router>
  </>
  );
}

export default App;
