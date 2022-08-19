import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Project from './components/Project';
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
    return (
      <div className="App">
        <Navbar/>
        <Header/>
        <About/>
        <Skills/>
        <Services/>
        <Project/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;
