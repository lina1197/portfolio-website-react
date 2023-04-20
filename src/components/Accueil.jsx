import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


import Navigation from "./Navigation";
import React from "react"
import ModeSombre from "./ModeSombre";

import Projets from "./Projets";
import Contact from "./Contact";
import Competences from './Competences';
import Apropos from './Apropos';
function Accueil() {
  return (
<div><Navigation 
        />
        <ModeSombre/>
        <div className="Intro"><h1>Hi,I'm Lina <br />A Full-Stack Web Developer</h1></div>
      <div className="HomeIMG"><img  src="/images/home.png" alt="" /></div> 
      <div className="SocialMedia" >
<Link to="*"><i class="fab fa-facebook-f  white-icon"></i></Link>
            <Link to="*"><i class="fab fa-twitter white-icon"></i></Link>
<Link to="*"><i class="fab fa-instagram  white-icon"></i></Link>
<Link to="*"><i class="fab fa-youtube  white-icon"></i></Link>

          </div> 
          <Apropos/>
          <Projets/>
          <Competences/>
          <Contact/>
        </div>


  )}

  export default Accueil;