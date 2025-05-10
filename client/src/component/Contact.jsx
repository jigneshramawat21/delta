import './Home.css'
import './About.css'
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { textarea } from 'framer-motion/client';
import axios from 'axios';


function Contact() {



  const [Contact , setContact]= useState({name:"", email:"", message: "" });

const Changing = (e)=>{
  setContact({...Contact,[e.target.name]:e.target.value});
};


const SubmitContact = async (e)=>{

  e.preventDefault();
  try{
    const res = await axios.post("http://localhost:5000/api/contacts",Contact);


    console.log(Contact);
    console.log(res);
     setContact({name:"", email:"", message:""});
    
  }catch(error){
   console.log(error);
  }
  

}

  const ref12 = useRef(null);
  const ref13 = useRef(null);
  const ref14 = useRef(null);

  const inView12 = useInView(ref12, { once: true, amount: 0.5 });
  const inView13 = useInView(ref13, { once: true, amount: 0.5 });
  const inView14 = useInView(ref14, { once: true, amount: 0.5 });

  const toptodown = {
    hidden: { y: "-200px", opacity: 0, transition: { duration: 0.5 } },
    visible: { y: "0", opacity: 1, transition: { duration: 0.5 } }
  }
 
  const righttoleft = {
    hidden: { x: "40px", opacity: 0, transition: { duration: 0.3 } },
    visible: { x: "0", opacity: 1, transition: { duration: 0.3 } },
  };
  const lefttoright = {
    hidden: { x: "-40px", transition: { duration: 0.3 } },
    visible: { x: "0", transition: { duration: 0.3 } },
  };


  return (
    <div className="main">
      <div className="welcomepage   container-fulid">
        <div className="welcomeaboutpagebg justify-content-center pt-5  d-flex align-items-center ">
          <div className="welcomecontantwrap h-50 container">

            <div className="welcomecontent pt-2 justify-content-center  align-items-center ">
              <h1 className='text-white pb-2 pt-5 '>delta</h1>
              <div className="welcomepagebutoon d-flex gap-4">
                <p className='p1'><Link to="/">Home</Link> <span><i class="fa-solid fa-forward-step"></i></span></p>
                <p className=''>Contact Us</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="contactformmain pt-5 bg-white container-fluid">
        <div className="contactfromwrapmain container">
          <div className="contacttwowrap d-flex row">
            <motion.div ref={ref13} variants={righttoleft} initial="hidden" animate={inView13 ? "visible" : "hidden"} className="formdiv w-100 d-lg-flex  align-items-center justify-content-center col-12">
             <div className="inputtitlewrap ps-5 pr-5 ">
              <div className=" pb-4 contacttitle w-100">
                <h2>Get in Touch</h2>
              </div>

              <div className="inputwrap w-100  ">
                <form onSubmit={SubmitContact}>
                  <label className=' w-100' htmlFor="name">Full Name</label>
                  <input className=' mb-2 mt-2 w-100' type="text" value={Contact.name} onChange={Changing} name='name' required placeholder='Enter Full Name' />

                  <label className=' w-100' htmlFor="name">Email</label>
                  <input className='mb-2 mt-2 w-100' type="email" value={Contact.email} onChange={Changing} name='email' required placeholder='Enter Your Email' />

                  <label className='w-100' htmlFor="name">Message</label>

                  <textarea className='mb-2 mt-2 w-100' name="message" value={Contact.message} onChange={Changing}  required placeholder='Enter Your Message'></textarea>

                  <button type='submit'>Submit</button>
                </form>
              </div>

              </div>


              <div className="contactaddress border-start border-black  ps-5 pr-5">

                <h1 >Connect with Us</h1>
                <div className="addresslocation pt-3">
                <h5><span><i className="fa-solid fa-location-dot"></i></span>Address</h5>
                <p>Mailing Address:xx00 E. Union Ave Suite 1100. Denver, CO 80237</p>
                </div>
                <div className="addresslocation">
                <h5><span><i class="fa-solid fa-phone"></i></span>Phone</h5>
                <div className="hover-link">
                <p className='ps-1'>9876543210</p>
                </div>
                </div>
                <div className="addresslocation">
                <h5><span><i class="fa-solid fa-at"></i></span>Email</h5>
                <div className="hover-link">
                <p className='ps-1'>delta@gmail.com</p>
                </div>
                </div>

                <h2>Connect with Us</h2>
                <div className="linkurl">
                  <a href="https://www.linkedin.com/in/jignesh-ramawat-47b14121a">
                  <button><i class="fa-solid fa-link"></i></button>
                  </a>
               
                </div>
                
              </div>

            </motion.div>



            <motion.div ref={ref14} variants={lefttoright} initial="hidden" animate={inView14 ? "visible" : "hidden"} className="map col-12 pt-4 pb-5 ">
              <iframe style={{ width: "100%", height: "420px",   }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.102040994955!2d75.85691987558204!3d26.773017066079724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc8e235dde2a1%3A0x2909a2a0c46f5c07!2sAshish%20Heights!5e0!3m2!1sen!2sin!4v1746823884999!5m2!1sen!2sin"  ></iframe>

            </motion.div>

          </div>
        </div>
      </div>




      <footer>
        <div className="footermain">

          <div className="footerwrap   ">

            <div className="allwrepfooter  d-flex justify-content-center align-items-center container">

              <motion.div ref={ref12} variants={toptodown} initial="hidden" animate={inView12 ? "visible" : "hidden"} className="footercontentwrap row w-100 d-flex justify-content-center align-items-center">

                <div className="footerone col-sm-12 justify-content-center align-items-center col-lg-3 w-full  text-white  ">
                  <div className="oneftop w-100 h-100 " >
                    <div className="foneimgwrap pb-4 h-100">
                      <img className='' src="./img/ind.webp" alt="" />

                    </div>
                    <div className=" fonetitle">
                      <h1 className=''>delta</h1>
                    </div>
                  </div>

                  <div className="onefdown text-center text-lg-start text-sm-center ">
                    <p className='w-100 '>
                      we are committed to delivering exceptional legal services with a focus on integrity, expertise, and personalized attention</p>
                  </div>

                  <div className="onedownicon justify-content-lg-start align-items-lg-start justify-content-sm-center align-items-start justify-content-center  align-items-sm-center   d-flex ">
                    <i class="   fa-brands fa-square-facebook "></i>
                    <i class=" fa-brands fa-square-twitter"></i>
                    <i class=" fa-brands fa-square-youtube"></i>
                  </div>

                </div>

                <div className="footertwo col-12 col-sm-6   pt-sm-5 pt-5  col-lg-3">
                  <div className="text-white pb-lg-3 text-center text-sm-center text-lg-start ftwotitle">
                    <h2>Quick links</h2>
                  </div>
                  <div className=" text-sm-center text-center text-lg-start twoulfwrap ">

                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/Aboutus">About Us</Link></li>
                      <li><Link to="/Service">Services</Link></li>
                      <li><Link to="/Blog"> Blog  </Link></li>
                      <li><Link to="/Contact">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="footerthree col-12 col-sm-6 pt-sm-5 col-lg-3">
                  <div className="text-white pb-lg-3 text-center text-sm-center text-lg-start fthreetitle">
                    <h2>Privacy </h2>
                  </div>
                  <div className="twoulfwrap text-center text-sm-center text-lg-start">

                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/Aboutus">About Us</Link></li>
                      <li><Link to="/Service">Services</Link></li>
                      <li><Link to="/Blog"> Blog  </Link></li>
                      <li><Link to="/Contact">Contact Us</Link></li>
                    </ul>


                  </div>
                </div>
                <div className="footerfour pb-lg-5 col-lg-3 text-center text-sm-center text-lg-start pt-sm-5 col-sm-12 ">
                  <div className="text-white  fthreedelatis">
                    <h2>Contact Details</h2>
                  </div>
                  <div className="text-white pt-lg-3 fdetails">
                    <p>Mailing Address:xx00 E. Union Ave Suite 1100. Denver, CO 80237</p>
                  </div>
                  <div className=" text-white fthreeicon">
                    <p className=''><i class="  fa-solid fa-phone"></i><span>7340088133</span></p>
                    <p> <i class="fa-solid fa-at"></i><span>delta@gmail.com</span></p>
                  </div>


                </div>
              </motion.div>

            </div>

            <div className="fcopy container pt-5 ">
              <div className="textcopyfooter w-md-100 text-white col-12">
                <p className='w-md-100'>Copyright &copy; delta 2025. All rights reserved.</p>
                <p className='w-md-100'>Powered by Joonweb.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
export default Contact;