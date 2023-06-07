import React from "react";
import Form from "../components/Form";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact: React.FC = () => {
  AOS.init({ once: true });

  return (
    <div>
      <div className="flex flex-col">
        <div className="mt-8 mb-16">
          <h1
            className="heading container-lg"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Contact me here.
          </h1>
          <div data-aos="fade-in" data-aos-duration="3000">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
