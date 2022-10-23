import React from "react";
import { Container } from "reactstrap";

import "./Header.css"


const navLinks = [
  {
    display: "Home",
    url: "#home",
  },
  {
    display: "About",
    url: "#about",
  },
  {
    display: "Skill",
    url: "#skill",
  },
  {
    display: "Project",
    url: "#proj",
  },
  {
    display: "Contact",
    url: "#contact",
  },
];

export default function Header() {
  return (
    <>
      <header className="header">
        <Container>
          <div className="navigation d-flex align-item-center justify-content-between">
            <div className="logo">
              <h5>Ashutosh</h5>
            </div>
            <div className="nav_menu">
            <ul className="nav__list">
              {navLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-4">
              {/* <button className="Btn">Lets Talk</button> */}
              <span className="mobile__menu">
                  <i className="ri-menu-5-line"></i>
              </span>
          </div>

  </div>

          

        </Container>
      </header>
    </>
  );
}
