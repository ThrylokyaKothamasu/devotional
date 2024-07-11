import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Slokas from './Components/Slokas';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import MythPageHandle from './Components/MythPageHandle'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Signin from './Components/Signin';
import Desavataras from './Components/Desavataras';


function App() {
  return (
  <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path='/Read' element={<Slokas/>}/>
        <Route path='/Myths' element={<MythPageHandle/>}/>
        <Route path="/Signin" element={<Signin />} />
        <Route path='/Desavataras' element={<Desavataras/>}/>

      </Routes>
      <Footer/>
    </Router>
  </>
  );
}

export default App;
