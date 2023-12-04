import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css'
import Companies from './components/Companies/Companies'
import Residencies from './components/Residencies/Residencies'
import Valuex from "./components/Value/Valuex";
import Contact from "./components/Contact/Contact"
import GetStarted from './components/GetStartetd/GetStarted';
import Footer from './components/Footer/Footer';
function App() {
  return (
   <div className="App">
    <div>
    <div className='white-gradient'/>
    <Header/>
    <Hero/>
    </div>
    <Companies/>
    <Residencies/>
   <Valuex/>
   <Contact/>
   <GetStarted/>
   <Footer/>
   </div>
  );
}

export default App;
