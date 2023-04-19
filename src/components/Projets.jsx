import React from "react";
import "../../src/styles/style.css";
import { Link } from "react-router-dom";
function Projets() {
  return (

    <div id="Projets">
        <div class="section">
  <div class="card">
    <div class="card-front">
      <h3>Application web pour le cabinet médical "santévie"</h3>
      <p>développement d'une application web pour le cabinet médical Santévie afin de moderniser sa gestion des patients et des rendez-vous. </p>
    </div>
    <div class="card-back">
         <p>Technologies used:</p>
      <ul className="ListTech">
        <li>HTML5</li>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>CSS3</li>
        <li>Git</li>
      </ul>
            <Link className="LinkProjet" to="/">Lien projet</Link>
                  <p>Date and Duration:</p>


    </div>
  </div>
  
  <div class="card">
    <div class="card-front">
     <h3>web site for HomeDeco startup(interior design startup)</h3> 
     <p>Designed and developed responsive static web pages for the owners of a new home interior design startup</p>
    </div>
    <div class="card-back">
      <p>Technologies used:</p>
      <ul className="ListTech">
        <li>HTML5</li>
        <li>Bootstrap</li>
        <li>CSS3</li>
        <li>Git</li>
      </ul>
            <Link className="LinkProjet" to="/">Lien projet</Link>
                  <p>Date and Duration:</p>


        </div>

  </div>
  
  <div class="card">
    <div class="card-front">
<h3>Site web pour l'agence de voyage Escape</h3> 
<p>développement d'un site web responsive pour l'agence de voyage Escape, qui est spécialisée dans les voyages d'aventure.</p>   </div>
    <div class="card-back">
        <p>Technologies used:</p>
      <ul className="ListTech">
        <li>HTML5</li>
        <li>Bootstrap</li>
        <li>CSS3</li>
        <li>Git</li>
        <li>Responsive design</li>
        <li>JavaScript</li>
        <li>UX</li>
        <li>UI</li>
      </ul>
      <Link className="LinkProjet" to="/">Lien projet</Link>
      <p>Date and Duration:</p>
    </div>
  </div>
</div>
        
    </div>
  )}
  export default Projets;