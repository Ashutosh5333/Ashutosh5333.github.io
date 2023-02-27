import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Button, useColorMode } from "@chakra-ui/react";

import { BrowserRouter as Router } from "react-router-dom";

import "./nav.css";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h5><span>A</span>shutosh  </h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navdata">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                About
              </Nav.Link>
              {/* <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>About</Nav.Link> */}
              <Nav.Link
                href="#skill"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#proj"
                className={
                  activeLink === "proj" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                className={
                  activeLink === "Resume" ? "active navbar-link" : "navbar-link"
                }
                target="_blank"
                href={
                  "https://drive.google.com/file/d/1BzpDODVcwSgxTYpxMolwDeRZAhxlW_T_/view?usp=sharing"
                }
                _blank
                download
                onClick={() => onUpdateActiveLink("Resume")}
              >
                Resume
              </Nav.Link>
              
              {/* <Nav.Link >
                 <Button onClick={toggleColorMode}>

                {colorMode === "light" ? <FaSun color={"black"} /> : <FiSun />}
                 </Button>
              </Nav.Link> */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
