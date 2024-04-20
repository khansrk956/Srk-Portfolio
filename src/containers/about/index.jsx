import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiReact, DiHtml5 } from "react-icons/di";
import { FaJs, FaCss3 } from "react-icons/fa";

const personalDetails = [
  { label: "Name", value: "Sharukh khan" },
  { label: "Age", value: "28" },
  {
    label: "Address",
    value: "Hno-1128, Nangla Enclave Part-2 Faridabad, Haryana",
  },
  { label: "Email", value: "khansrk956@gmail.com" },
  { label: "Mob", value: "+918802727273" },
];

const jobSummary =
  "Seasoned and independent From End Developer  with 6 months of internship in blending teh art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debuggin. Very passionate about aesthetics and UI design. It is imperative that you provide a through and professional approach to your resume. As a Front End Developer you'll be judged by your ability to use UX and UI concepts and follow design guidelines. It's about expressing your attention to details and how you can help implement design ideas for your future employer.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, index) => (
                <li key={index}>
                  <span className="title">{item.label}:-</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiHtml5 size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaCss3 size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaJs size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
