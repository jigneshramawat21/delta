import './Home.css'
import './About.css'
import { useEffect, useRef, useState } from 'react';
import './About.css'
import './Home.css'
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Service() {
   const [cardAdd, setCardAdd] = useState([]);


   useEffect(() => {
      const fetch = async () => {
          try {

              const res = await axios.get('http://localhost:5000/api/trainings/');
              console.log(res.data);
              setCardAdd(res.data)

          }
          catch (error) {
              console.error("Error fetching card", error);
          };

      }


      fetch();
  }, []);


  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref6 = useRef(null);
  const ref14 = useRef(null);
  const ref9 = useRef(null);
  const ref12 = useRef(null);

  const inView3 = useInView(ref3, { once: true, amount: 0.5 });
  const inView4 = useInView(ref4, { once: true, amount: 0.5 });
  const inView6 = useInView(ref6, { once: true, amount: 0.5 });
  const inView14 = useInView(ref14, { once: true, amount: 0.5 });
  const inView9 = useInView(ref9, { once: true, amount: 0.5 });
  const inView12 = useInView(ref12, { once: true, amount: 0.5 });

  const righttoleft = {
   hidden: { x: "40px",opacity: 0, transition: { duration: 0.3 } },
   visible: { x: "0",opacity: 1, transition: { duration: 0.3 } },
 };
 const topleftright = {
   hidden: { y: "-100px",opacity: 0, x:"-100px", transition: { duration: 0.7 } },
   visible: { x: "0", y:"0",opacity: 1, transition: { duration: 0.3 } },
 };
 const toptodown = {
   hidden:{y:"-200px", opacity: 0, transition:{duration : 0.5}},
   visible : {y:"0",  opacity: 1, transition :{duration : 0.5}}
 }
 const panimation ={
   hidden:{x:"20px" , opacity:0, transition:{duration:0.5}},
   visible :{x:"0", opacity:1, transition :{duration:0.5}}
}

   return (
      <div className="service">
         <div className="welcomepage   container-fulid">
        <div className="welcomeaboutpagebg justify-content-center pt-5  d-flex align-items-center ">
          <div className="welcomecontantwrap h-50 container">

            <div className="welcomecontent pt-2 justify-content-center  align-items-center ">
              <h1 className='text-white pb-2 pt-5 '>delta</h1>
              <div className="welcomepagebutoon d-flex gap-4">
                <p className='p1'><Link to="/">Home</Link> <span><i class="fa-solid fa-forward-step"></i></span></p>
                <p className=''>Service</p>
              </div>
            </div>

          </div>
        </div>
      </div>



      <div className="servicesectionmain mt-5">
                    <div className="servicetitletop">
                        <motion.div ref={ref3} variants={righttoleft} initial="hidden" animate={inView3 ? "visible" : "hidden"} className="servicetitle">
                            <h2>Empowering Excellence:
                                Our Services</h2>
                        </motion.div>
                    </div>
                    <motion.div ref={ref4} variants={topleftright} initial="hidden" animate={inView4 ? "visible" : "hidden"} className="servicedown">

                        <div className="servicedownleft">
                            <div className="serviceimgdown">
                                <div className="imgserv">
                                    <img src="./img/ch.webp" alt="" />
                                </div>
                            </div>
                            <div className="servicedowntitleimg">
                                <h5>Web Development</h5>
                                <p>Crafting dynamic websites tailored to your needs, with sleek design and seamless functionality to elevate your online presence.</p>
                            </div>
                        </div>


                        <div className="servicedownright">
                            <div className="serviceimgdown">
                                <div className="imgserv">
                                    <img src="./img/ch2.webp" alt="" />
                                </div>
                            </div>
                            <div className="servicedowntitleimg">
                                <h5>App Development</h5>
                                <p>Transforming ideas into innovative mobile solutions, delivering intuitive user experiences and powerful functionalities to engage .</p>
                            </div>
                        </div>


                        <motion.div ref={ref6} variants={toptodown} initial="hidden" animate={inView6 ? "visible" : "hidden"} className="servicedownleft">
                            <div className="serviceimgdown">
                                <div className="imgserv">
                                    <img src="./img/ch3.webp" alt="" />
                                </div>
                            </div>
                            <div className="servicedowntitleimg">
                                <h5>UI/UX Design</h5>
                                <p>Elevate user experiences with captivating designs and intuitive interfaces, optimizing engagement across digital platforms.</p>
                            </div>
                        </motion.div>



                        <motion.div ref={ref6} variants={toptodown} initial="hidden" animate={inView6 ? "visible" : "hidden"} className=" servicedownright">
                            <div className="serviceimgdown">
                                <div className="imgserv">
                                    <img src="./img/ch4.webp" alt="" />
                                </div>
                            </div>
                            <div className="servicedowntitleimg">
                                <h5>IT Management</h5>
                                <p>Efficiently oversee IT operations, ensuring seamless functionality, cybersecurity, and strategic alignment to drive organizational success and innovation.</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>





                <div className=" creativemain pb-5 container-fluid bg-white h-100 " >


                    < div className="creativetop container">
                        <div className="creativewrap w-100 row justify-content-center align-items-center text-center d-flex">
                            <div className="creativeleft col-12 pb-5 pb-lg-0 col-lg-6 ">
                                <motion.div ref={ref14} variants={righttoleft}  initial="hidden" animate={inView14 ? "visible" : "hidden"} className="creativeimgtop justify-content-center p-2 align-items-center text-center d-flex w-100 h-50">
                                    <img className='w-25 h-100 ' src="./img/cruv.webp" alt="" />
                                </motion.div>
                                <motion.div ref={ref14} variants={righttoleft}  initial="hidden" animate={inView14 ? "visible" : "hidden"} className="creativelefttext">
                                    <h3>Our Creative Projects</h3>
                                </motion.div>
                            </div>
                            <div className="creativeright col-12  col-lg-6 border-start border-2  border-black ">
                                <motion.div ref={ref14} variants={panimation}  initial="hidden" animate={inView14 ? "visible" : "hidden"} className="creativerighttext p-2 text-start">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </motion.div>
                            </div>

                        </div>
                    </div>


                    <div className="creativedown container">
                        <motion.div ref={ref9} variants={topleftright} initial="hidden" animate={inView9 ? "visible" : "hidden"} className="creativedwonwrap d-flex    justify-content-center align-items-center  row">

                            {cardAdd.map((items) => (


                                <div className="creativecardwrap col-12 pt-4 pb-3 pb-lg-0   col-lg-6 " key={items._id}>
                                    <div className="creativebg " style={{ backgroundImage: `url(${items.imageUrl})` }}>
                                        <div className="creativecardimgwrap p-sm-2 d-flex justify-content-center align-items-center  h-100  ">

                                            <div className="creativecardcontant ">
                                                <h3 className='w-100 pt-4'>{items.title}</h3>
                                                <p className='w-100 pt-4'>{items.description}</p>
                                                <div className="creativeh3wrap">
                                                    <h3 className='w-100 pt-4 '>Full Case Study <i class="fa-solid fa-arrow-right"></i></h3>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                            )}







                        </motion.div>
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
export default Service;