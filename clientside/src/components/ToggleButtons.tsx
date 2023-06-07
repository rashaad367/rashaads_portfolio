import React, { useState } from "react";
import style from "./ToggleButtons.module.scss";
import Cards from "./ProjectCards";
import SkillIcons from "./ImageCards";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import BootstrapIcon from "../assets/bootstrap.svg";
import CssIcon from "../assets/css3.svg";
import ExpressIcon from "../assets/express.svg";
import GithubIcon from "../assets/github.svg";
import HtmlIcon from "../assets/html5.svg";
import JavaIcon from "../assets/java.svg";
import JavascriptIcon from "../assets/javascript.svg";
import JQueryIcon from "../assets/jquery.svg";
import MongodbIcon from "../assets/mongodb.svg";
import MongooseIcon from "../assets/mongoose.svg";
import MysqlIcon from "../assets/mysql.svg";
import NodeIcon from "../assets/nodejs.svg";
import ReactIcon from "../assets/react.svg";
import SassIcon from "../assets/sass.svg";
import TailwindIcon from "../assets/tailwind.svg";
import TypescriptIcon from "../assets/typescript.svg";

// Project images
import Technologent from "../assets/technologent.svg";
import InTheLoop from "../assets/intheloop.svg";
import Portfolio from "../assets/portfolio.svg";
import Sudoku from "../assets/sudoku.svg";

const ToggleButtons: React.FC = () => {
  const [showButton1, setShowButton1] = useState(true);
  const [showButton2, setShowButton2] = useState(true);

  const handleClick1 = () => {
    setShowButton1(false);
    setShowButton2(true);
  };

  const handleClick2 = () => {
    setShowButton1(true);
    setShowButton2(false);
  };

  AOS.init({ once: true }); // scoll animations (one time)

  return (
    <div>
      <div className="flex justify-center">
        <h2
          className="sub-heading ml-6"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          Mirror, mirror on the page. Show me Rashaad's{" "}
        </h2>
      </div>
      <div
        className={`magic-mirror ${
          !showButton1 || !showButton2 ? null : style.colorThree // Initially red
        } ${!showButton1 ? style.colorOne : style.colorTwo}`} // Either turns green or blue
      >
        {showButton1 &&
          showButton2 && ( // arrows show up if no button has been selected yet
            <>
              <div className="arrow1 arrow1-first"></div>
              <div className="arrow2 arrow2-first"></div>
            </>
          )}
        {showButton1 && (
          <>
            <button
              className={`${style.btnOne} py-2 px-6`}
              onClick={handleClick1}
            >
              Abilities
            </button>
          </>
        )}
        {!showButton2 && ( // Page content of Abilties
          <>
            <h1
              className="sub-heading center"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              Projects
            </h1>
            <div className="flex flex-col md:flex-row">
              <div data-aos="fade-in" data-aos-duration="750">
                <Cards
                  name="Technologent"
                  imageUrl={Technologent}
                  description="User: bobjackson@gmail.com Pwsd: 12345678. An RSVP based meetup website for techies."
                  button1Text="Source"
                  button2Text="Live"
                />
              </div>
              <div data-aos="fade-in" data-aos-duration="1500">
                <Cards
                  name="InTheLoop"
                  imageUrl={InTheLoop}
                  description="User: bobjackson@gmail.com Pwsd: 12345678. Web app that helps people find nearby events."
                  button1Text="Source"
                  button2Text="Live"
                />
              </div>
              <div data-aos="fade-in" data-aos-duration="2250">
                <Cards
                  name="Portfolio Website"
                  imageUrl={Portfolio}
                  description="This is my portfolio that you are now witnessing. It was made using popular technologies."
                  button1Text="Source"
                  button2Text="Live"
                />
              </div>
              <div data-aos="fade-in" data-aos-duration="3000">
                <Cards
                  name="Sudoku 9x9"
                  imageUrl={Sudoku}
                  description="A fun, enjoyable client based sudoku game with customization options and difficulties."
                  button1Text="Source"
                  button2Text="Live"
                />
              </div>
            </div>
          </>
        )}
        {showButton2 && (
          <>
            <button
              className={`${style.btnTwo} py-2 px-6`}
              onClick={handleClick2}
            >
              Projects
            </button>
          </>
        )}
        {!showButton1 && ( // Page content of Projects
          <>
            <h1
              className="sub-heading center"
              data-aos="fade-in"
              data-aos-duration="2000"
            >
              Abilities
            </h1>
            <div className="flex flex-col md:flex-row center">
              <div
                className={`${style.skillPanel} mr-4`}
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <div>
                  <h1 className="center font-bold">Development Tools</h1>
                </div>
                <h2>Front-end</h2>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <SkillIcons imageUrl={ReactIcon} description="React" />
                  <SkillIcons
                    imageUrl={TypescriptIcon}
                    description="TypeScript"
                  />
                  <SkillIcons imageUrl={TailwindIcon} description="Tailwind" />
                  <SkillIcons imageUrl={SassIcon} description="Sass" />
                </div>
                <h2>Back-end</h2>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <SkillIcons imageUrl={NodeIcon} description="Node.js" />
                  <SkillIcons imageUrl={ExpressIcon} description="Express.js" />
                  <SkillIcons imageUrl={MongooseIcon} description="Mongoose" />
                </div>
                <h2>Database</h2>
                <div className="grid grid-cols-4 gap-4">
                  <SkillIcons imageUrl={MongodbIcon} description="MongoDB" />
                  <SkillIcons imageUrl={MysqlIcon} description="MySql" />
                </div>
              </div>
              <div
                className={`${style.skillPanel} mr-4`}
                data-aos="fade-in"
                data-aos-duration="2000"
              >
                <h1 className="center font-bold">Specialization</h1>
                <p>
                  Currently, I specialize in front-end development with a strong
                  focus on the MERN stack, which stands for MongoDB, Express.js,
                  React, and Node.js. However, my expertise extends beyond these
                  technologies.
                </p>
                <br />
                <p>
                  I have a keen eye for detail and a strong understanding of
                  UI/UX principles.
                </p>
              </div>
              <div
                className={`${style.skillPanel}`}
                data-aos="fade-in"
                data-aos-duration="3000"
              >
                <h1 className="center font-bold">Other Tools</h1>
                <h2>General</h2>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <SkillIcons imageUrl={JQueryIcon} description="JQuery" />
                  <SkillIcons
                    imageUrl={BootstrapIcon}
                    description="Bootstrap"
                  />
                  <SkillIcons imageUrl={GithubIcon} description="Github" />
                </div>
                <h2>Basics</h2>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <SkillIcons imageUrl={HtmlIcon} description="HTML5" />
                  <SkillIcons
                    imageUrl={JavascriptIcon}
                    description="JavaSrcipt"
                  />
                  <SkillIcons imageUrl={CssIcon} description="CSS3" />
                  <SkillIcons imageUrl={JavaIcon} description="Java" />
                </div>
                <h2>____________________________________________</h2>
                <p>
                  If you would like to see more details on my skills/tools, take
                  a look at my resume.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ToggleButtons;
