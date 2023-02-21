import React from "react";
import Client from "../ClientDir/Client";

const Experience = ({ clients }) => {
  return (
    <div className="px-10 text-luxBrown">
      <div className="headerExperience flex items-center gap-3 mt-2">
        <h1 className=" font-medium font-karla text-[18px] xs:text-[23px]">
          My Experience
        </h1>
        <i className="bi bi-window-plus"></i>
      </div>
      <div className="experienceDescription">
        <p className="mt-2 pl-2">
          Along my process,I also manage to develop some websites for small
          bussiness with amazing results.
        </p>
      </div>
      <div className="clientsContainer">
        <div className="clientsHeader">
          <p className="pl-2 font-bold text-center text-[19px] xs:text-[22px] mb-14 mt-7">
            What some of my clients have to say?
          </p>
        </div>
        <div className="clients flex flex-col gap-14 lg:gap-12 2xl:flex-row 2xl:justify-center">
            {clients.map((client) => {
                return <Client key={client.id} {...client} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
