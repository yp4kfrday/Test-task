import React from 'react'

import "../../../styles/styles.css";
import "../../../styles/colors.css";
import "./styles.css";

import AncientGateLineIcon from "remixicon-react/AncientGateLineIcon";
import Building3LineIcon from "remixicon-react/Building3LineIcon";
import PulseLineIcon from "remixicon-react/PulseLineIcon";
import MailCheckLineIcon from "remixicon-react/MailCheckLineIcon";
import ToolsFillIcon from "remixicon-react/ToolsFillIcon";

const About = () => {
  return (
    <div className="about-container">
          <div className="about-titles">
        <h1>Мы - профессиональная компания, специализирующаяся на демонтаже крупных и мелких зданий.</h1>
      </div>
      <div className="about-layouts">
        <div className="about-layout">
          <AncientGateLineIcon className="some-class" size={140} color="#37B9FC" />
          <p>Демонтаж крупных зданий, таких как небоскребы, заводские корпуса, многоэтажные жилые здания и другие сооружения.</p>
        </div>
        <div className="about-layout">
          <Building3LineIcon className="some-class" size={140} color="#37B9FC" />
          <p>Демонтаж мелких зданий, таких как гаражи, склады, дачные домики и другие небольшие сооружения.</p>
        </div>
        <div className="about-layout">
          <PulseLineIcon className="some-class" size={140} color="#37B9FC" />
          <p>Утилизация отходов и очистка территории после демонтажа.</p>
        </div>
      </div>
      <div className="about-layouts">
        <div className="about-layout">
          <MailCheckLineIcon className="some-class" size={140} color="#37B9FC" />
          <p>Консультации и экспертные оценки. Наши эксперты всегда готовы предоставить консультации по вопросам демонтажа и утилизации отходов.</p>
        </div>
        <div className="about-layout">
          <ToolsFillIcon className="some-class" size={140} color="#37B9FC" />
          <p>Разборка конструкций. Мы имеем опыт и знания в разборке различных конструкций, включая металлические и бетонные конструкции, каркасы и другие элементы зданий.</p>
        </div>
      </div>
    </div>
  );
};

export default About
