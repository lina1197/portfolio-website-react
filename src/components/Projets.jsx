import React from "react";
import "../../src/styles/style.css";
import { Link } from "react-router-dom";
function Projets() {
  return (

    <div class="Projets" id="Projets">
              <h1 className="Header">Projets</h1>

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
            <Link className="LinkProjet" to={`https://github.com/lina1197/project-SanteVie/`} target="_blank">Lien projet</Link>


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
            <Link className="LinkProjet" to={`https://github.com/lina1197/HomeDeco-Website-Project`} target="_blank">Lien projet</Link>


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
      <Link className="LinkProjet" to={`https://github.com/lina1197/ESCAPE_TRAVEL/`} target="_blank">Lien projet</Link>
    </div>
  </div>
<div class="card">
    <div class="card-front">
      <h3>Application web de streaming</h3>
      <p>développement de l'application Web  de streaming de films cineStream pour le studio de cinéma.</p>
    </div>
    <div class="card-back">
         <p>Technologies used:</p>
      <ul className="ListTech">
        <li>HTML5</li>
        <li>Reactjs</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>CSS3</li>
        <li>Git</li>
      </ul>
            <Link className="LinkProjet" to={`https://github.com/lina1197/cine-stream/`} target="_blank">Lien projet</Link>


    </div>
  </div>
  <div class="card">
    <div class="card-front">
      <h3>Application web pour la bibliothèque BiblioTech</h3>
      <p>développement d'une application web qui permettra à ses utilisateurs de rechercher des livres, de consulter les disponibilités et de gérer leurs emprunts. </p>
    </div>
    <div class="card-back">
         <p>Technologies used:</p>
      <ul className="ListTech">
        <li>MongoDB</li>
        <li>Nodejs</li>
        <li>JavaScript</li>
        <li>Express</li>
        <li>Git</li>
      </ul>
            <Link className="LinkProjet" to={`https://github.com/lina1197/Application-web-BiblioTech/`} target="_blank">Lien projet</Link>


    </div>
  </div>
  

</div>
        
    </div>
  )}
  export default Projets;