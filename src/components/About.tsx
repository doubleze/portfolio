import React from "react";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind Css.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";
import NextJs from "../assets/NextJs.png";

import Angular from "../assets/Angular.png";
import Cpp from "../assets/C++_.png";
import Java from "../assets/java.png";
import JavaJPS from "../assets/Java_JPS.png";
import Flutter from "../assets/flutter.png";

import MySql from "../assets/mysql.png";
import Nest from "../assets/NestJs.png";


import Oracle from "../assets/oracle.png";
import Odoo from "../assets/odoo.png";
import Spring from "../assets/spring Boot.png";
import PostGreSQL from "../assets/PostgreSQL.png";
import Python from "../assets/python.png";

const About: React.FC = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              I'm Zelalem Zeleke
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              ERP project manager, Odoo ERP functional consultant, Odoo ERP
              Implementer, Fullstack Developer, Software Developer, Software
              Engineer
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  My professional journey began as a Junior Hardware Engineer, where I regularly maintained ATM and card printer hardware. This role provided a solid technical foundation, but my growing interest in software propelled me to the Information Security Agency as an Application Developer. There, I engaged in full-stack development for an ERP system that digitized operations worth over $4 billion annually, conducting strategic business analyses and providing enterprise architecture for the Electric Single Window project.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  My career then progressed at the Ministry of Revenue, where I served as a Software Quality Assurance Senior Officer, establishing stringent quality standards for an electronic tax collection system. My leadership skills flourished as I became a Senior Software Programmer at the Ministry of Transport and Logistics, enhancing a fuel subsidy system that processed 120,000 daily transactions. These experiences refined my technical and management abilities, preparing me for more significant challenges.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  In my lst role, as an ERP Product Manager at Kegeberew Technology Solution, I oversee product development from requirements to deployment, achieving a remarkable 70% reduction in operational costs. This role blends my technical expertise with strategic oversight, ensuring successful project execution and customer satisfaction. Throughout my journey, I have embraced challenges, continuously learning and adapting, and I am passionate about leading teams to deliver innovative solutions that drive efficiency and impact.
                </p>
             
              </div>
              <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Skills & Expertise
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { src: Java, label: "Java", width: "w-9" },
                    { src: Spring, label: "Spring boot", width: "w-9" },
                    { src: Python, label: "Python", width: "w-9" },
                    { src: NodeLogo, label: "Node.js", width: "w-9" },
                    { src: Express, label: "Express.js", width: "w-8" },
                    { src: Nest, label: "Nest.js", width: "w-10" },
                    { src: Oracle, label: "Oracle PL/SQL", width: "w-8 rounded-full" },
                    { src: PostGreSQL, label: "PostGreSQL", width: "w-8" },
                    { src: MySql, label: "MySql", width: "w-8 rounded-full" },
                    { src: Odoo, label: "Odoo ERP", width: "w-8 rounded-full" },
                    { src: Cpp, label: "C++", width: "w-8 rounded-full" },
                  ].map(({ src, label, width }) => (
                    <div
                      key={label}
                      className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300"
                    >
                      <img src={src} alt={label} className={width} />
                      <span className="font-semibold">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { src: Html, label: "HTML", width: "w-10" },
                    { src: Css, label: "CSS", width: "w-8" },
                    { src: Javascript, label: "JavaScript", width: "w-10" },
                    { src: ReactLogo, label: "React", width: "w-8 rounded-full" },
                    { src: ReduxLogo, label: "Redux", width: "w-8" },
                    { src: Tailwind, label: "Tailwind CSS", width: "w-8 rounded-full" },
                    { src: Bootstrap, label: "Bootstrap", width: "w-10" },
                    { src: Mongodb, label: "MongoDB", width: "w-10" }, 
                    { src: NextJs, label: "Next.js", width: "w-9" },
                    { src: Angular, label: "Angular", width: "w-9" },
                    { src: Flutter, label: "Flutter", width: "w-9" },
                    { src: JavaJPS, label: "Java JPS", width: "w-9" },
                    
                  ].map(({ src, label, width }) => (
                    <div
                      key={label}
                      className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300"
                    >
                      <img src={src} alt={label} className={width} />
                      <span className="font-semibold">{label}</span>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Beyond my passion for coding, I am dedicated to learning new technologies and staying current with the latest trends in project management and development. In addition to this, I run a startup where I not only deliver innovative solutions to meet customer needs but also create a sustainable business for myself. Through my work, I have the opportunity to teach technology to others, empowering them to enhance their livelihoods and transform their business as well as lives. This blend of innovation, education, and entrepreneurship fuels my commitment to making a positive impact in the tech community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;