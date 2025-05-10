import { useEffect, useRef, useState } from 'react';
import Count from './Count';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Link } from 'react-router-dom';
import { motion, useInView } from "framer-motion";
import axios from 'axios';


function Home() {

const amimationfade = {
    hidden :{opecity: 0, x:-300},
    visible :{opacity :1, x:0, transition: { duration: 0.6 } }
    
};

const ref1 = useRef(null);
const ref2 = useRef(null);
const ref3 = useRef(null);
const ref4 = useRef(null);
const ref6 = useRef(null);
const ref7 = useRef(null);
const ref8 = useRef(null);
const ref9 = useRef(null);
const ref10 = useRef(null);
const ref11= useRef(null);
const ref12= useRef(null);
const ref13= useRef(null);
const ref14= useRef(null);



// Check if element is in view
const inView1 = useInView(ref1, { once: true, amount: 0.5 }); // 0.5 means center of screen
const inView2 = useInView(ref2, { once: true, amount: 0.5 });
const inView3 = useInView(ref3, { once: true, amount: 0.5 });
const inView4 = useInView(ref4, { once: true, amount: 0.5 });
const inView6 = useInView(ref6, { once: true, amount: 0.5});
const inView7 = useInView(ref7, { once: true, amount: 0.5 });
const inView8 = useInView(ref8, { once: true, amount: 0.5 });
const inView9 = useInView(ref9, { once: true, amount: 0.5 });
const inView10 = useInView(ref10, { once: true, amount: 0.5 });
const inView11 = useInView(ref11, { once: true, amount: 0.5 });
const inView12 = useInView(ref12, { once: true, amount: 0.5 });
const inView14 = useInView(ref14, { once: true, amount: 0.5 });
const inView13 = useInView(ref13, { once: true, amount: 0.5 });

const righttoleft = {
    hidden: { x: "40px",opacity: 0, transition: { duration: 0.3 } },
    visible: { x: "0",opacity: 1, transition: { duration: 0.3 } },
  };
const lefttoright = {
    hidden: { x: "-100px", transition: { duration: 0.3 } },
    visible: { x: "0", transition: { duration: 0.3 } },
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

    const [cardAdd, setCardAdd] = useState([]);

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

    return (
        <>


            <div className="Mani">

                <div className="welcomeimg">

                    <motion.div variants={amimationfade} initial="hidden" animate="visible"  className="wcontainer">
                        <div className=" wrepwtitle">
                            <div className="welonetitle">
                                <p>welcome delta</p>
                            </div>
                            <div className="weltwotitle">
                                <p>Your IT Partner
                                    for Success</p>
                            </div>
                            <div className="welbuttonservice">
                                <button>Our Service</button>
                            </div>
                        </div>
                    </motion.div>


                </div>



                {/* second  */}


                <div className="aboutsmain    bg-white " >
                    <div className="aboutsc ">
                        <div className="aboutcmain">
                            <motion.div ref={ref1} variants={righttoleft}  initial="hidden" animate={inView1 ? "visible" : "hidden"} className="aboutleftc">
                                <div className="aboutleftcontant">
                                    <div className="aboutcruvimg">
                                        <img src="./img/cruv.webp" alt="cruvimg" />
                                    </div>
                                    <div className="abouth2">
                                        <h3>Unleashing the Power of Innovation</h3>
                                    </div>
                                    <div className="aboutp">
                                        <p>IT technology revolutionizes connectivity, efficiency, and security, driving digital transformation across industries worldwide.</p>
                                    </div>
                                    <div className="aboutpoint">
                                        <p><i class="fa-solid fa-circle-check"></i>Seamless connectivity</p>
                                        <p><i class="fa-solid fa-circle-check"></i>Robust security measures</p>
                                        <p><i class="fa-solid fa-circle-check"></i>Streamlined operations</p>
                                    </div>

                                    <div className="aboutbutton">
                                        <button>About US</button>
                                    </div>
                                </div>

                            </motion.div>
                            <motion.div ref={ref2} variants={lefttoright} initial="hidden" animate={inView2 ? "visible" : "hidden"} className="aboutrightc">
                                <div className="aboutrightimg">
                                    <img src="./img/cruvright.webp" alt="aboutimg" />
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>


                {/* section three Services */}


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
                                    <img src="./img/s1.webp" alt="" />
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
                                    <img src="./img/s2.webp" alt="" />
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
                                    <img src="./img/s3.webp" alt="" />
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
                                    <img src="./img/s4.webp" alt="" />
                                </div>
                            </div>
                            <div className="servicedowntitleimg">
                                <h5>IT Management</h5>
                                <p>Efficiently oversee IT operations, ensuring seamless functionality, cybersecurity, and strategic alignment to drive organizational success and innovation.</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>


                <div className="container-fluid bg-white w-100 readmore deltawelcomeimgok  d-flex  justify-content-center align-items-center">
                    <div className="readwrap w-100 p-lg-5  ps-md-1   g-5 row ">
                        <motion.div ref={ref13} variants={righttoleft}  initial="hidden" animate={inView13 ? "visible" : "hidden"} className="readone w-full p-1 col-12 col-lg-4  mx-auto">
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


                {/* count */}

                <div className="count mb-5 mt-3 container-fluid bg-white h-100 d-flex justify-content-center align-items-center  ">
                    <div className="countwrap bg-white w-100 h-100 ">
                        <div className="cardtitlewrap pb-4 w-100 justify-content-center align-items-center text-center d-flex">
                            <motion.div ref={ref7} variants={righttoleft}  initial="hidden" animate={inView7 ? "visible" : "hidden"} className="couttitle ">
                                <h2>Our Agency Facts</h2>
                            </motion.div>
                        </div>
                        <div className="coutcards container h-100   ">
                            <motion.div ref={ref8} variants={topleftright} initial="hidden" animate={inView8 ? "visible" : "hidden"} className="countcardwidth h-100 justify-content-center align-items-center text-center d-flex row">
                                <div className=" col-lg-4 col-sm-6  col-md-4 pt-2  col-12  cardone">
                                    <Count targetNumber={26} title="Years of Experience" />

                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-4 pt-2 col-12  cardtwo">
                                    <Count targetNumber={1500} title="Successfully Projects Done" />


                                </div>
                                <div className=" col-md-4 col-sm-12  col-lg-4 pt-2  col-12 cardthree">
                                    <Count targetNumber={1008} title="Satisfied Happy Clients" />


                                </div>

                            </motion.div>
                        </div>
                    </div>
                </div>



                {/* countdownpara */}




                {/* creativecard */}




                <div className=" creativemain container-fluid bg-white h-100 " >


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
                {/* 

FAQS */}

                <div className="faqs  pb-5 container-fluid bg-white">
                    <div className="faqswrap container p-5">
                        <div className="toptitlefaqs  bg-white w-100 d-flex justify-content-center align-items-center">
                            <motion.h2 ref={ref10} variants={righttoleft}  initial="hidden" animate={inView10 ? "visible" : "hidden"} className='p-5'>FAQs</motion.h2>
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

                {/* footer */}

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



        </>
    )
}
export default Home;

