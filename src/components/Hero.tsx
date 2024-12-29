import React from "react";
import hero from "../assets/Hero.png";
import linkedin from "../assets/linkedin.png";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-6xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Zelalem <span className="text-neutral-900">Zeleke</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">
              Project maneger, Product owner, Busines analyst & Fullstack
              developer
            </p>
            <p className="mb-4">
              I am an experienced Project Manager, Product Owner, Business
              Analyst, and Senior Software Designer with over ten years in ERP
              software, legacy and micro-service development. I excel at
              leveraging diverse technologies to create enterprise-class
              solutions, demonstrating a strong understanding of customer
              environments and product usability.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a
                href="https://drive.google.com/file/d/10GcmOXiD2FwSnl-XgNRjLSgavDFHeT_k/view?usp=drive_link"
                download
                target="_blank"
              >
                Download Resume
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="Hero" className="lg:h-[90vh] h-96" />
            <img
              src={reactLogo}
              alt="React Logo"
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt="Redux Logo"
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt="Tailwind CSS"
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <a
          href="https://www.linkedin.com/in/zelalem-zeleke/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-foreground/80"
        >
          <img src={linkedin} alt="LinkedIn" className="w-20" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
