import React from "react";

const Background = () => {
  return (
    <div className="px-10  text-luxBrown">
      <div className="headerBackground flex items-center gap-3">
        <p className="font-medium font-karla text-[18px] xs:text-[23px]">
          My Background
        </p>
        <i className="bi bi-journals"></i>
      </div>
      <div className="backgroundDescription">
        <p className="mt-2 pl-2">
          With over 1 year in constantly learning and developing amazing web
          applications I gained the following skills :
        </p>
        <div className="frontendContainer">
          <p className="mt-4 pl-2 font-bold text-[19px] xs:text-[22px]">FrontEnd</p>
          <ul className="mt-2 pl-8 list-disc space-y-3">
            <li>HTML5</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Tailwind CSS & Bootstrap</li>
            <li>React JS with Next JS</li>
          </ul>
        </div>
        <div className="backendContainer">
          <p className="mt-4 pl-2 font-bold text-[19px] xs:text-[22px]">BackEnd</p>
          <ul className="mt-2 pl-8 list-disc space-y-3">
            <li>Node JS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Background;
