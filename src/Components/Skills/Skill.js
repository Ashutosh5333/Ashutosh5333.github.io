

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import 'aos/dist/aos.css';

import "./skill.css";
import { useEffect } from "react";

export const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
    <section className="skills-card" id="skills">
      <div className="container">
        <div className="nav.link.skills" >
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2  data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
              >Skill</h2>
            
              <Carousel
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div   data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300" className="item">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
                    alt="Image"
                  />
                 
                </div>
                <div   data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300" className="item">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg"
                    alt="Image"
                  />
               
                </div>
                <div   data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300" className="item">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg"
                    alt="Image"
                  />
              
                </div>
                <div   data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300" className="item">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
                    alt="Image"
                  />
             
                </div>
                {/* --------- */}
                <div   data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300" className="item">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
                    alt="Image"
                  />
                 
                </div>
                <div   data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300" className="item">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
                    alt="Image"
                  />
                  
                </div>
                <div   data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300" className="item">
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
