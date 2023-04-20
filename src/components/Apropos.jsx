import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const APropos = () => {
  return (
    <div className="APropos" id="APropos"><div  >
        <h1 className="Header">ABOUT ME</h1>
        
        <div className="AProposSection"><p>Hello world !, my first introduced to programming was during my university days and ever since i have been interested in launch my freelance career in web development but only 6 month ago i have taken the first step by joining a full on 1 year training to be an all rounded full stack web developer, i am now familiar with working with:</p>
        <div className="AProposContainer"><ul>
        <li>HTML5</li>
        <li>Bootstrap</li>
        <li>CSS3</li>        
        <li>JavaScript</li>
        <li>Nodejs</li>
        <li>EXPRESS</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Git</li>
        <li>Responsive design</li>
        <li>UX</li>
        <li>UI</li>
      </ul></div>
        </div>
        <div className="buttons"><Link  to="#Contact"><button className="Btn">Hire me</button>
                </Link> 
       
       <Link  to="../assets/Test PDF.pdf" target="_blank" download><button className="Btn">get resume</button></Link>
       </div>
       
       
    </div></div>
    
  )}

  export default APropos;