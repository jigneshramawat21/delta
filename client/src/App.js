import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './component/Home';
import Blog from './component/Blog';
import Aboutus from './component/Aboutus';
import Service from './component/Service';
import Contact from './component/Contact';
import { useState } from 'react';
import { motion } from 'framer-motion';


function App() {

  const navVariants = {
    hidden: { y: "-100%", transition: { duration: 0.4 } },
    visible: { y: "0%", transition: { duration: 0.4 } },
  };



  const [menuOpen, setMenuOpen] = useState(false);
  return (



    <Router>
      <div className='main'>



        {
          menuOpen && (
            <div className='overlayeer'>
              <div className={`hed ${menuOpen ? 'active' : ''}`}>

                <div className='menuhed'>
                  <div className='menuimglogo'>
                    <img src='./img/logoMain.webp' alt='logo'></img>
                  </div>

                  <p onClick={() => setMenuOpen(false)}><span className="material-symbols-outlined">close</span></p>

                </div>
                <ul className="mobile-menu">
                  <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                  <li><Link to="/Aboutus" onClick={() => setMenuOpen(false)} >About Us</Link></li>
                  <li><Link to="/Service" onClick={() => setMenuOpen(false)}>Services</Link></li>
                  <li><Link to="/Blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
                  <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
                </ul>


                <div className='menuicon'>
                  <div className='menutopicon'>
                    <span className="material-symbols-outlined">call</span>

                    <span className="material-symbols-outlined">mail</span>

                  </div>
                  <div className='menubottomicon'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                  </div>


                  <div className='menucontactbutton'>
                    <button><Link to="/Contact">Contact Us</Link></button>
                  </div>


                </div>


              </div>
            </div>




          )
        }

        <div className='container-fluid'>

          <div className=' head'>
            <div className='headone'>
              <span className="material-symbols-outlined">
                call
              </span>
              <p>7340088133</p>

            </div>
            <div className='headtwo'>
              <span className="material-symbols-outlined">mail</span>
              <p>J@gmail.com</p>
            </div>
            <div className='headthree'>
              <p>Follow<span>:</span></p>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>

          </div>
        </div>

        <motion.div variants={navVariants} initial="hidden" animate="visible"className='headersection'>

          <div className='hsone'>
            <div className='logoimg'>
              <img src='./img/logoMain.webp' alt='Logo'></img>
            </div>
            <div className='logotext'>
              <h2>delta</h2>
            </div>
          </div>
          <div className='hstwo'>


            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Aboutus">About Us</Link></li>
              <li><Link to="/Service">Services</Link></li>
              <li><Link to="/Blog"> Blog  </Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
            </ul>


          </div>

          <div className='hsthree menucontactbutton '>
                    <button><Link to="/Contact">Contact Us</Link></button>
                  </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-outlined">menu</span>
          </div>


        </motion.div>
      </div>

      <Routes>


        <Route path='/' element={<Home />}></Route>
        <Route path='/Blog' element={<Blog />}></Route>
        <Route path='/Aboutus' element={<Aboutus />}></Route>
        <Route path='/Service' element={<Service />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
    </Router>





  );
}

export default App;
