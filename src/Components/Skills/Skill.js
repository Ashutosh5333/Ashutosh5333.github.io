

import { FaReact } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import "./skill.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skill</h2>
            
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
                    alt="Image"
                  />
                 
                </div>
                <div className="item">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg"
                    alt="Image"
                  />
               
                </div>
                <div className="item">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg"
                    alt="Image"
                  />
              
                </div>
                <div className="item">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
                    alt="Image"
                  />
             
                </div>
                {/* --------- */}
                <div className="item">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
                    alt="Image"
                  />
                 
                </div>
                <div className="item">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
                    alt="Image"
                  />
                  
                </div>
                <div className="item">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg"
                    alt="Image"
                  />
                 
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
