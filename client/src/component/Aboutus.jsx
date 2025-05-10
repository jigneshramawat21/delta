import { useRef, useState } from 'react';
import './About.css'
import './Home.css'
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';



function Aboutus() {

  const [openToggle, setOpenToggle] = useState(0);
  const contentRefs = useRef([]);


  const contentData = [
    [
      "IT technology refers to the broad spectrum of hardware, software, networks, and services used to manage and process information within organizations. It encompasses various fields such as networking, cybersecurity, data management, and software development."
    ],
    [
      "IT technology plays a crucial role in modern businesses by enabling efficient communication, streamlined operations, data analysis, and decision-making. It enhances productivity, facilitates innovation, and supports organizational growth and competitiveness."
    ],
    [
      "IT technology can benefit businesses in numerous ways, such as improving operational efficiency, enhancing communication and collaboration, facilitating remote work, increasing data security, enabling better decision-making through data analytics, and fostering innovation and competitive advantage."
    ],
    [
      "IT technologies encompass a wide range of tools and systems, including computer hardware, software applications, networking infrastructure, cloud computing services, cybersecurity solutions, data analytics platforms, and more"
    ]
  ];
  const button = [
    "What is IT technology?",
    "Why is IT technology important?",
    "How can IT technology benefit businesses?",
    "What are the different types of IT technologies?"
  ];

  const handleToggle = (index) => {
    setOpenToggle(openToggle === index ? null : index);

  };




  const ref13 = useRef(null);
  const ref7 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref12 = useRef(null);

  const inView7 = useInView(ref7, { once: true, amount: 0.5 });
  const inView13 = useInView(ref13, { once: true, amount: 0.5 });
  const inView10 = useInView(ref10, { once: true, amount: 0.5 });
  const inView11 = useInView(ref11, { once: true, amount: 0.5 });
  const inView1 = useInView(ref1, { once: true, amount: 0.5 });
  const inView2 = useInView(ref2, { once: true, amount: 0.5 });
  const inView12 = useInView(ref12, { once: true, amount: 0.5 });

  const topleftright = {
    hidden: { y: "-100px", opacity: 0, x: "-100px", transition: { duration: 0.7 } },
    visible: { x: "0", y: "0", opacity: 1, transition: { duration: 0.3 } },
  };
  const righttoleft = {
    hidden: { x: "40px", opacity: 0, transition: { duration: 0.3 } },
    visible: { x: "0", opacity: 1, transition: { duration: 0.3 } },
  };
  const lefttoright = {
    hidden: { x: "-100px", transition: { duration: 0.3 } },
    visible: { x: "0", transition: { duration: 0.3 } },
  };

  const toptodown = {
    hidden: { y: "-200px", opacity: 0, transition: { duration: 0.5 } },
    visible: { y: "0", opacity: 1, transition: { duration: 0.3 } }
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
                <p className=''>About Us</p>
              </div>
            </div>

          </div>
        </div>
      </div>





      <div className="container-fluid bg-white w-100 readmore deltawelcomeimgok  d-flex  justify-content-center align-items-center">
        <div className="readwrap w-100 p-lg-5  ps-md-1   g-5 row ">
          <motion.div ref={ref13} variants={righttoleft} initial="hidden" animate={inView13 ? "visible" : "hidden"} className="readone w-full p-1 col-12 col-lg-4  mx-auto">
            <div className="readimg w-100 h-75   ">
              <img className='w-100 h-100' src="./img/read.webp" alt="" />
            </div>
          </motion.div>
          <div className="readtwo     h-100 mx-auto  col-12 col-lg-4">
            <motion.div ref={ref13} variants={toptodown} initial="hidden" animate={inView13 ? "visible" : "hidden"} className="w-50 pt-2  h-25 readtwoimg">
              <img className='w-75 h-100' src="./img/cruv.webp" alt="" />
            </motion.div>
            <motion.div ref={ref13} variants={toptodown} initial="hidden" animate={inView13 ? "visible" : "hidden"} className="welcomeread pt-3">
              <p>Welcome To delta</p>
            </motion.div>
            <motion.div ref={ref13} variants={toptodown} initial="hidden" animate={inView13 ? "visible" : "hidden"} className="readtitletwo">
              <h3 className='fs-3 fw-normal lh-3  ' >
                Top Technology and IT services with Our Agency.
              </h3>
            </motion.div>

          </div>

          <motion.div ref={ref7} variants={lefttoright} initial="hidden" animate={inView7 ? "visible" : "hidden"} className="readthree bg-gray  mx-auto  h-100  col-12 col-lg-4">
            <div className="treereadtext">
              <p className='fw-normal lh-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                Read More</p>
            </div>
            <div className="readbutton pt-2 pb-4 ">
              <button >Read More</button>
            </div>
          </motion.div>
        </div>
      </div>





      <div className="faqs   pb-5 container-fluid bg-white">
        <div className="faqswrap container ">
          <div className="toptitlefaqs  bg-white w-100 d-flex justify-content-center align-items-center">
            <motion.h2 ref={ref10} variants={righttoleft} initial="hidden" animate={inView10 ? "visible" : "hidden"} className='p-5'>FAQs</motion.h2>
          </div>

          <div className="downfaqs bg-white container-fluid">
            <motion.div ref={ref10} variants={topleftright} initial="hidden" animate={inView10 ? "visible" : "hidden"} className="downfaqswrap w-100 h-100 row">


              <motion.div ref={ref11} variants={toptodown} initial="hidden" animate={inView11 ? "visible" : "hidden"} className="faqsleft bg-white col-12  col-lg-6">


                {contentData.map((data, index) => (



                  <div key={index} className="toggleitem  ">

                    <button className={`toggle-btn ${openToggle === index ? 'active' : ''}`} onClick={() => handleToggle(index)}>{button[index]}  {openToggle === index ? (
                      <i className="fa-solid fa-minus"></i>
                    ) : (
                      <i className="fa-solid fa-plus"></i>
                    )}</button>

                    <div
                      className={`toggle-contennt ${openToggle === index ? 'open' : ''}`}
                      ref={(el) => (contentRefs.current[index] = el)}
                      style={{
                        maxHeight:
                          openToggle === index
                            ? `${contentRefs.current[index]?.scrollHeight}px`
                            : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-in-out',
                      }}
                    >
                      {data.map((content, i) => (
                        <p key={i}>{content}</p>
                      ))}
                    </div>



                  </div>

                ))}

              </motion.div>


              <div className="faqsright col-lg-6 h-100">
                <div className="imgwrapfaqs w-100 h-100 ">
                  <img className='w-100 h-100' src="./img/faqs.webp" alt="" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>


      <div className="aboutteam border-0 bg-white container-fluid">
        <div className="aboutteam wrap container">
          <motion.h2 ref={ref2} variants={righttoleft} initial="hidden" animate={inView2 ? "visible" : "hidden"} className="abouttopteam row text-center text-black  justify-content-center align-items-center ">
            <p>Our Team</p>
            <h2>Our Team</h2>
            <h6>Your Bridge to a New Beginning: Our Immigration Team</h6>
          </motion.h2>

          <motion.div ref={ref1} variants={topleftright} initial="hidden" animate={inView1 ? "visible" : "hidden"} className="aboutteamdown pt-4 container ">
            <div className="aboutteamdownwrap  pb-5 row w-full d-flex justify-content-center align-items-center ">
              <div className="aboutteamimg text-center col-lg-3 col-sm-6 justify-content-center align-items-center">
                <img src="./img/shape1.webp" alt="" />
                <h2 className='pt-4 fs-5'>Jenny Lewis</h2>
                <h3 className='fs-6'>Manager</h3>


              </div>
              <div className="aboutteamimg text-center col-sm-6 col-lg-3 justify-content-center align-items-center">
                <img className='' src="./img/shape2.webp" alt="" />
                <div className="textwrapteam w-100">
                  <h2 className='pt-4 fs-5'>Martha</h2>
                  <h3 className='fs-6'>Manager</h3>
                </div>



              </div>
              <div className="aboutteamimg text-center col-sm-6  col-lg-3 justify-content-center align-items-center">
                <img src="./img/shape3.webp" alt="" />
                <h2 className='pt-4 fs-5'>Emma</h2>
                <h3 className='fs-6'>Director</h3>



              </div>
              <div className="aboutteamimg text-center col-sm-6 col-lg-3  justify-content-center align-items-center ">
                <img src="./img/shape4.webp" alt="" />
                <h2 className='pt-4 fs-5'>Martha</h2>
                <h3 className='fs-6'>Manager</h3>




              </div>
            </div>
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
export default Aboutus;