import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf';
import { themeContext } from "../../Context";
import{ useContext } from "react";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 
  return (
    <div className = "services" id='Services'>
        <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>services</span>
        <span>
            Lorem ispum is simply dummy text of printing of printing Lorem 
            <br />
            ispum is simply dummy text of printing
        </span>


        <a href= {Resume} download>
           <button className="button s-button">Download My CV</button>
        
        </a>
       <div className="blur s-blurl" style={{ background: "#ABF1FF94"}}></div>
        </div>
        <div className="cards">

            <div style={{left:'14rem'}}>
              <Card
              emoji = {HeartEmoji}
              heading = {'Design'}
              detail = {"Figma, skech, Photoshop, Adobe,Adobe xd"}
            />
            </div>

            
            <div style={{ top: "12rem", left:"-4rem"}}>
              <Card
              emoji = {Glasses}
              heading = {"Developer"}
              detail = {"Html,css,Javascriot,React"}
            />
            </div>


            
            <div style={{ top: "19rem", left:"12rem"}}>
              <Card
              emoji = {Humble}
              heading = {"UI/UX"}
              detail = {"Lorem ispum dummy text are usually use in section where"}
            />
            </div>
            <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        </div>
      </div>
      
  )
}

export default Services