import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Navigation from "./Navigation";
import React from "react"
import ModeSombre from "./ModeSombre";

import Projets from "./Projets";
import Contact from "./Contact";
import Competences from './Competences';
function Accueil() {
  return (
<div><Navigation 
        />
        <ModeSombre/>
        <div className="Intro"><h1>Hi,I'm Lina <br />A Full-Stack Web Developer</h1></div>
      <div className="HomeIMG"><img  src="/images/home.png" alt="" /></div> 
      <div className="SocialMedia" >
<i class="fab fa-facebook-f  white-icon"></i>
            <i class="fab fa-twitter white-icon"></i>
<i class="fab fa-instagram  white-icon"></i>
<i class="fab fa-youtube  white-icon"></i>

          </div> 
          <Projets/>
          <Competences/>
          <Contact/>
        </div>


  )}

  export default Accueil;