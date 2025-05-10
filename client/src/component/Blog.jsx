import './Home.css'
import './About.css'
import { motion ,useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';



function Blog() {

  const ref12 = useRef(null);

  const inView12 = useInView(ref12, { once: true, amount: 0.5 });
  const toptodown = {
    hidden:{y:"-200px", opacity: 0, transition:{duration : 0.5}},
    visible : {y:"0",  opacity: 1, transition :{duration : 0.5}}
  }

  return (
    <div className="main">
      <div className="welcomepage   container-fulid">
        <div className="welcomeaboutpagebg justify-content-center pt-5  d-flex align-items-center ">
          <div className="welcomecontantwrap h-50 container">

            <div className="welcomecontent pt-2 justify-content-center  align-items-center ">
              <h1 className='text-white pb-2 pt-5 '>delta</h1>
              <div className="welcomepagebutoon d-flex gap-4">
                <p className='p1'><Link to="/">Home</Link> <span><i class="fa-solid fa-forward-step"></i></span></p>
                <p className=''>Blog</p>
              </div>
            </div>

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
export default Blog;