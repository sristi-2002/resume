import React from "react";
import "./Intro.css";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import Instagram from "../img/instagram.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import boy from "../img/boy.png";
import thumbup from "../img/thumbup.png";
import Crown from "../img/crown.png";
import glassesimoji from "../img/glassesimoji.png";
import FloatingDiv from '../Components/FloatingDiv/FloatingDiv';
import { themeContext } from "../Context";
import{ useContext } from "react";

const Intro = () => {



const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                <span style = {{color: darkMode? 'white': ''}}>Hy! I Am</span>
                <span>Sristi Mitra</span>
                <span>Frontend Developer with high level of experience in web designing ans development, producting the Quality work
                </span>
            </div>

            <button className = "button i-button">Hire Me</button>
            <div className="i-icons">
                <img src={Github} alt="Github" />
                <img src={LinkedIn} alt="LinkedIn" />
                <img src={Instagram} alt="Instragram" />
            </div>
            </div>
            <div className="i-right">
              <img src={Vector1} alt="" />
              <img src={Vector2} alt="" />
              <img src={boy} alt="" />
              <img src={glassesimoji} alt="" />
              <div style={{top: '-4%', left: '68%'}}>
                <div className="floating-div">
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
           </div> 
           </div>
           <div style={{top: '18rem', left: '0rem'}}>
            <FloatingDiv image = {thumbup} txt1 = 'Best Design' txt2= 'Award'/>
            <div className="floating-div">
            </div>
           </div>
           <div className = "blur" style={{background: "rgb(238 210 255)"}}></div>
            </div>

            <div className="blur" 
            style={{
                background: '#C1F5FF',
                top: '17rem',
                width: '21rem',
                height:'11rem',
                left:'-9rem'
        }}
        ></div>
        
        </div>

       
    );
};

export default Intro 