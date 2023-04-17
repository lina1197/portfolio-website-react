import Navigation from "./Navigation";
import React from "react"
import ModeSombre from "./ModeSombre";
function Accueil() {
  return (
<div><Navigation 
        />
        <ModeSombre/>
        <div className="Intro"><h1>Hi,I'm Lina <br />A Full-Stack Web Developer</h1></div>
      <div className="HomeIMG"><img  src="/images/home.png" alt="" /></div> 
      <div className="SocialMedia" >
<i class="fab fa-facebook-f fa-lg white-icon"></i>
            <i class="fab fa-twitter fa-lg white-icon"></i>
<i class="fab fa-instagram fa-lg white-icon"></i>
<i class="fab fa-youtube fa-lg white-icon"></i>

          </div> 
        </div>


  )}

  export default Accueil;