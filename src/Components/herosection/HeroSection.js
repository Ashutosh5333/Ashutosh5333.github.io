import React, { useEffect } from "react";
import "./herosection.css";
import { Container, Row, Col } from "reactstrap";
import IMG from "../../assets/IMG.jpeg";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <Container className="sect" id="home">
        <Row>
          <Col lg="6" md="6">
            <div
              data-aos="fade-up-right"
              data-aos-duration="2000"
              data-aos-delay="300"
              className="hero__content mb-4"
              id="about"
            >
              <h5  data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300" className="mb-3">Hi</h5>
              <h2  data-aos="fade-up-right"
              data-aos-duration="2000"
              data-aos-delay="300"
               className="hero_title mb-3">
                I'm <span id="user-detail-name">Ashutosh Lakshakar</span>
              </h2>
              <h2 style={{ color: "red" }} className="hero_titlep mb-3">
                <span style={{ color: "red" }} id="user-detail-name">
                  <Typewriter
                    deleteSpeed={90}
                    typeSpeed={100}
                    delaySpeed={2500}
                    words={[
                      "Full Stack Web Developer",
                      "Problem Solver",
                      "Life Long Learner",
                    ]}
                    loop
                    cursor
                    cursorBlinking
                    cursorStyle="..."
                  />
                </span>
              </h2>
              <p id="user-detail-intro">
                A passionate programmer with the ability to learn quickly and
                implement and also versatile enough to learn and work in a new
                environment Currently looking for an opportunity to work for an
                organization where I can contribute my skills and manage
                critical projects that impact the organization, as well as
                broaden my scope of learning.
              </p>

              <div className="mt-4 hero__btns d-flex align-items-center gap-4">
                <button className="resumee-btnn">
                  <a
                    target="_blank"
                    href={
                      "https://drive.google.com/file/d/1dboQYHtNNi9YKidxc8SAin9we5JGEAgK/view?usp=share_link"
                    }
                    id="resume-button-2"
                    _blank
                    download
                  >
                    Resume
                  </a>
                </button>
                <button className="Btn">Contact</button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-offset="100"
              className="home-img"
            >
              <img src={IMG} alt="ashu" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
