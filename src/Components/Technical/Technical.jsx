  import React from "react";
  import html from "../Images/Html.png";
  import css from "../Images/Css.png";
  import react from "../Images/react.png";
  import redux from "../Images/redux-seeklogo.com.svg";
  import mongo from "../Images/mongodb-seeklogo.com.svg";
  import node from "../Images/nodejs.png";
  import next from "../Images/next-js-seeklogo.com.svg";
  import js from "../Images/js.png";
  import git from "../Images/git.png";
  import github from "../Images/github.png";
  import chakra from "../Images/chakra.png";
  import express from "../Images/express.png";
  import vs from "../Images/vscode.png";
  import typescript from "../Images/typescript.png";
  import npm from "../Images/npm.876.svg";
  import dsa from "../Images/Dsa.png";
  import cypress from "../Images/cypress1.webp";
  import tailwind from "../Images/tailwindcss.jpg";
  import Aos from "aos";
  import "./tech.css";
  
  import { useEffect } from "react";
  
  const Technical = () => {
    const [tech, setTech] = React.useState("all");
  
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  
    const skillsarr = [
      { img: html, name: "HTML" },
      { img: css, name: "CSS" },
      { img: js, name: "Java Script" },
      { img: react, name: "React" },
      { img: redux, name: "Redux" },
      { img: mongo, name: "Mongo Db" },
      { img: node, name: "Node JS" },
      { img: next, name: "Next JS" },
      { img: express, name: "Express JS" },
      { img: typescript, name: "Type Script" },
      { img: npm, name: "Npm" },
      { img: dsa, name: "DSA" },
      { img: cypress, name: "Cypress" },
    ];
    const frontend = [
      { img: html, name: "HTML" },
      { img: css, name: "CSS" },
      { img: js, name: "Java Script" },
      { img: react, name: "React" },
      { img: redux, name: "Redux" },
      { img: next, name: "Next JS" },
      { img: typescript, name: "Type Script" },
      { img: npm, name: "Npm" },
      { img: dsa, name: "DSA" },
      { img: cypress, name: "Cypress" },
    ];
    const backend = [
      { img: mongo, name: "Mongo Db" },
      { img: node, name: "Node JS" },
      { img: npm, name: "Npm" },
      { img: express, name: "Express JS" },
      { img: dsa, name: "DSA" },
    ];
    const toolsarr = [
      { img: vs, name: "VS Code" },
      { img: github, name: "Github" },
  
      { img: chakra, name: "Chakra UI" },
      { img: tailwind, name: "Tailwind css" },
      { img: git, name: "Git" },
    ];
  
    return (
      <section id="skills">
        <div
          id="tech"
          data-aos="fade-down-right"
          data-aos-duration="2000"
          data-aos-delay="300"
          className="techitem"
        >
          <h1 style={{ color: "var(--color-font)" }}>Technical Skills </h1>
        </div>
        <div
          id="skillsButton"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-offset="100"
          className="techitem"
        >
          <button
            id="button"
            className={tech === "all" ? "active" : null}
            onClick={() => setTech("all")}
          >
            ALL
          </button>
          <button
          id="button"
            className={tech === "frontend" ? "active" : null}
            onClick={() => setTech("frontend")}
          >
            FRONTEND{" "}
          </button>
          <button
          id="button"
            className={tech === "backend" ? "active" : null}
            onClick={() => setTech("backend")}
          >
            BACKEND
          </button>
        </div>
        {tech==="all"?<div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          data-aos-offset="100"
          id="skillsdiv"
        >
          {tech === "all"
            ? skillsarr.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "frontend"
            ? frontend.map((el) => (
                <div>
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "backend"
            ? backend.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
        </div>:null}
        {tech==="backend"?<div
          className="techitem"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          data-aos-offset="100"
          id="skillsdiv"
        >
          {tech === "all"
            ? skillsarr.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "frontend"
            ? frontend.map((el) => (
                <div>
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "backend"
            ? backend.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
        </div>:null}
        {tech==="frontend"?<div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          data-aos-offset="100"
          id="skillsdiv"
        >
          {tech === "all"
            ? skillsarr.map((el) => (
                <div >
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "frontend"
            ? frontend.map((el) => (
                <div>
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "backend"
            ? backend.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
        </div>:null}
        <div
          id="tools"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          // margin={"auto"}
          className="techitem"
          // justifyContent={"space-around"}
        >
          <h1 style={{ color: "var(--color-font)" }}>Tools </h1>
        </div>
        <div id="skillsdiv">
          {toolsarr.map((el) => (
            <div
              data-aos="zoom-in-down"
              data-aos-duration="2000"
              data-aos-offset="100"
            >
              {" "}
              <img alt="" src={el.img} />
              <h3>{el.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Technical;
  