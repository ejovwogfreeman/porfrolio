import { useState, useEffect } from "react"
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
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";


function App() {
  const [show, setShow] = useState(-100);
  const goUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.addEventListener(
      "scroll",
      (() => {
        let top = window.pageYOffset || document.documentElement.scrollTop;
        if (top > 500) {
          setShow(10);
        } else {
          setShow(-100);
        }
      })
    );
  }, []);

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
        <Box
          sx={{
            "& > :not(style)": {
              m: 1,
              position: "fixed",
              bottom: show,
              right: 20,
              transition: "all 1s",
            },
          }}
        >
          <Fab size="medium" color="#2351DC;" aria-label="top" onClick={goUp}>
            <KeyboardArrowUpRoundedIcon sx={{ fontSize: 30 }} />
          </Fab>
        </Box>
      </div>
  );
}

export default App;
