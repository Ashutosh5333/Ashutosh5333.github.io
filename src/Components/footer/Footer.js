import "./footer.css";
import React, { useEffect } from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="footer">
      <hr
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="300"
        style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
      ></hr>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="300"
        className="footer-Content"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
          className="leftSide"
        >
          <div className="location-main-div">
            <FaHome
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
              className="location-icon"
            />
            <div>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                Jalaun, Utter Pradesh
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                India
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
            className="mobile-main-div"
          >
            <FaPhone
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
              className="mobile-icon"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
              id="contact-phone"
            >
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
                id="contact-phone"
              >
                +91 7985175333
              </p>
            </div>
          </div>

          <div id="contact-email" className="email-main-div">
            <FaMailBulk
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
              className="email-icon"
            />
            <div id="contact-email">
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                lakshakarashutosh@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="rightSide">
          <div className="social">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
              id="contact-linkedin"
            >
              <a
                id="contact-linkedin"
                href="https://www.linkedin.com/in/ashutosh-lakshakar-23b478233/"
                target="_blank"
              >
                <FaLinkedin className="linkdin" />
              </a>
            </div>
            <br />
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
              id="contact-github"
            >
              <a
                id="contact-github"
                href="https://github.com/Ashutosh5333"
                target="_blank"
              >
                <FaGithub className="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
