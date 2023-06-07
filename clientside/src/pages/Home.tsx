import React from "react";
import SocialButton from "../components/SocialButtonProps";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import ToggleButtons from "../components/ToggleButtons";
import ScrollArrowState from "../components/ScrollArrowState";
import AOS from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
  const githubUrl = "https://github.com/rashaad367";
  const linkedinUrl = "https://www.linkedin.com/in/rashaad-jones-5a59b6220";
  AOS.init({ once: true });

  return (
    <div>
      <div className="flex flex-col mb-20">
        <div className="mt-8 mb-16">
          <h1
            className="heading container-lg"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Welcome,
          </h1>
          <h2
            className="sub-heading container"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            my name is Rashaad Jones.
          </h2>
          <h2 className="container" data-aos="fade-in" data-aos-duration="1000">
            I am a front-end developer who enjoys dabbling with different
            technologies.
          </h2>
          <div className="container flex">
            <div className="my-16 w-1/2">
              <h1
                className="sub-heading"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {" "}
                What I like
              </h1>
              <ul data-aos="fade-in" data-aos-duration="3000">
                <li className="mb-3">- Basketball</li>
                <li className="mb-3">- Dark Souls 3</li>
                <li>- Problem Solving</li>
              </ul>
            </div>
            <div className="my-16 w-1/2">
              <h1
                className="sub-heading"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Education
              </h1>
              <div data-aos="fade-in" data-aos-duration="3000">
                <h2>University of North Carolina at Charlotte</h2>
                <p>with Bachelor of Science in Computer Science, </p>
                <p>a concentration in Software Engineering, </p>
                <p>a minor in Psyhcology, and a GPA of 3.69</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end container-lg">
            <h2
              className="heading"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              Check me out.
            </h2>
          </div>
        </div>
        <div className="center">
          <ScrollArrowState />
        </div>
        <ToggleButtons />
        <div className="fixed-bl">
          <SocialButton icon={githubIcon} url={githubUrl} altText="GitHub" />
          <SocialButton
            icon={linkedinIcon}
            url={linkedinUrl}
            altText="LinkedIn"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
