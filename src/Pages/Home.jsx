import React ,{useRef} from 'react'
import useScrollOnDrag from 'react-scroll-ondrag';


import Btn from '../Components/Btn'
import DisplayIcon from '../Components/DisplayIcon';
import Review from '../Components/Review';
import Content from '../Components/Content';

import '../Styles/Home.css'

import LogoMain from '../Assets/logo/logomain.png'
import heroImg from '../Assets/heroImg.png'

import xoxodayLogo from '../Assets/logo/xoxoday.png'
import kutumbLogo from '../Assets/logo/kutumb.png'
import delhiveryLogo from '../Assets/logo/delhivery.png'
import unityLogo from '../Assets/logo/unitty.png'
import appyhighLogo from '../Assets/logo/appyhigh.png'
import bharatpeLogo from '../Assets/logo/bharatpe.png'
import moglixLogo from '../Assets/logo/moglix.png'


const ScrollSec = ({ runScroll,imgList }) => {
    const containerRef = useRef(null)
    
    const { events } = useScrollOnDrag(containerRef, {
        runScroll: runScroll && runScroll(containerRef)
    });

    return (
        <div className="scrollDiv" {...events} ref={containerRef}>
            {imgList.map((el,index)=>{
                return <img src={el} key={index} alt="payment" />
            })}
        </div>
    );
};

const Home = () => {

    const contactRef = useRef(null)
    const handleScroll = () => {
        contactRef.current?.scrollIntoView({behavior: 'smooth'});
    };


  return (
    <>
        <nav className="navBar">
            <div className="logoDiv"><img src={LogoMain} alt="Logo" /></div>
            <Btn click={handleScroll}/>
        </nav>
        <div className="heroSec">
            <div className="upper">
                <div className="left">
                    <h1>Set up CI/CD<br />Pipelines for <br />Kubernetes in<br />3 minutes!</h1>
                    <p>Streamline your Kubernetes deployments using Devtron and say goodbye to writing YAML scripts.</p>
                    <Btn click={handleScroll}/>
                </div>
                <div className="right">
                    <img src={heroImg} alt="Hero" />
                </div>
            </div>
            <div className="lower">
                <h1>❤️ By Developers & Business’</h1>
                <ScrollSec imgList={[xoxodayLogo,kutumbLogo,delhiveryLogo,unityLogo,appyhighLogo,bharatpeLogo,moglixLogo]} />
            </div>
        </div>
        <div className="manageSec">
            <h1 className="headLine">Finding it difficult to manage <br />
            CI/CD pipeline on Kubernetes?</h1>
            <Content />
            <Btn click={handleScroll}/>
        </div>
        <div className="displaySec">
            <DisplayIcon />
            <Review />  
            <Btn click={handleScroll}/>
        </div>
        <div className="contactSec" ref={contactRef}>
            <div className="left">
                <h1>Reduce your CI/CD burden on k8s.</h1>
                <h1>Get started with Devtron today.</h1>
            </div>
            <div className="right">
                <form onSubmit={()=>alert("Form Submitted")}>
                    <h1>Request a Demo For Your Custom Setup</h1>
                    <div className="inputDiv">
                        <label htmlFor="eamil">Work Email Address</label>
                        <input type="email" name="email" placeholder='your@company.com' autoComplete='off' required id="email" />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="name">First Name</label>
                        <input type="text" name="name" placeholder='e.g. John' autoComplete='off' required id="name" />
                    </div>
                    <div className="inputDiv">
                        <select name="prblm" id="prblm" placeholder="What challenges are you facing?" required>
                            <option value="1">What challenges are you facing?</option>
                            <option value="2">2 What challenges are you facing?</option>
                            <option value="3">3 What challenges are you facing?</option>
                        </select>
                    </div>
                    <Btn />
                </form>
            </div>
        </div>
        <div className="copyRight">
            Copyright © 2024 &nbsp; <a href="https://www.instagram.com/rohitpratap002/"> Rohit Pratap</a>. All Rights Reserved.
        </div>
        
    </>
  )
}

export default Home