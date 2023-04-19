import React from "react";
import "../../src/styles/style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Competences = () => {
  return (
    <div id="Competences" className="skills-section">
      <div className="skills-header">
        <h1>Skills</h1>
      </div>
      <div className="skills-container">
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
             <i class="fab fa-html5 skills-icons html5"></i>

            </div>
            <h3>HTML 5</h3>
          </div>
        </div>
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
                     <i class="fab fa-css3-alt skills-icons css3"></i>

            </div>
            <h3>CSS3</h3>
          </div>
        </div>
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
                     <i class="fab fa-js-square skills-icons  js"></i>

            </div>
            <h3>JAVASCRIPT</h3>
          </div>
        </div>
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <i class="fab fa-node-js node-js"></i>

            </div>
            <h3>NODE.JS</h3>
          </div>
        </div>
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <i class="fab fa-react react"></i>

            </div>
            <h3>REACT</h3>
          </div>
        </div>
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
<i class="fas fa-leaf mongodb"></i><i class="fas fa-database"></i>


            </div>
            <h3>MongoDB</h3>
          </div>
        </div>
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
<i class="fab fa-bootstrap bootstrap"></i>



            </div>
            <h3>Bootstrap</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
