import React from "react";
import Image from "next/image";

const Client = (props) => {
  const { name, id, img, company, website, feedback, description} = props;

  let stars=[];
  for(let i=0;i<5;i++){
    if(i<feedback){
      stars[i]=<i key={i} className="bi bi-star-fill text-yellow-500"></i>
    }
    else{
      stars[i]=<i key={i} className="bi bi-star"></i>
    }
  }

  return (
    <div>
      <div className="client relative min-h-[300px] mb-8 bg-luxBrown text-[#f8f8f8] rounded-md px-3 py-2 max-w-[561px] mx-auto block md:hidden">
        <div className="imageContainer absolute -top-6 -left-3">
            <Image alt="Profile Pic" src={img} width={100} height={100} className="rounded-full w-[90px] h-[90px] object-cover"/>
        </div>
        <div className="clientNameContainer">
          <p className="text-center pt-2 text-[19px] xs:text-[22px] font-medium font-source italic mt-1">{name}</p>
        </div>
        <div className="clientFeedback h-[100%]">
          <p className="text-inter mt-8 text-center text-[17px] font-karla">
            {description}
          </p>
          <div className="flex items-center justify-center">
            <div className="mt-3 flex items-center gap-3 justify-center cursor-pointer hover:text-gray-400 duration-[.10s]">
                <a rel="noreferrer" target="_blank" href={website} className="font-bold text-[18px] xs:text-[19px]">{company}</a>
                <i className="bi bi-box-arrow-up-right"></i>
            </div>
          </div>
          <div className="text-white flex gap-1 items-center justify-center mt-5">{stars}</div>
        </div>
      </div>  

      {/* Dekstop Version */}

      <div className="client relative min-h-[250px] bg-luxBrown text-[#f8f8f8] rounded-md px-3 py-2 max-w-[561px] mx-auto hidden md:block">
        <div className="imageContainer absolute -top-8 left-[50%] -translate-x-[50%]">
            <Image src={img} width={100} height={100} alt="client-photo" className="rounded-full w-[90px] h-[90px] object-cover"/>
        </div>
        <div className="clientInformation h-[250px] flex items-center justify-center gap-5">
            <div>
              <p className="text-center pt-2 text-[19px] xs:text-[20px] lg:text-[21px] font-bold font-source mt-1 whitespace-nowrap">{name}</p>
              <div className="flex items-center justify-center">
                <div className="mt-3 flex items-center gap-3 justify-center cursor-pointer hover:text-gray-400 duration-[.10s]">
                    <a rel="noreferrer" target="_blank" href={website} className="font-light text-[18px] xs:text-[19px]">{company}</a>
                    <i className="bi bi-box-arrow-up-right"></i>
                </div>
              </div>
            </div>
              <div className="border-l-2 w-[1px] h-[130px]"></div>
            <div className="clientFeedback h-[100%]px-3">
              <p className="text-inter mt-8 text-left text-[16px] font-karla">
                {description}
              </p>
              <div className="text-white flex gap-1 items-center justify-center mt-5">{stars}</div>
            </div>  
        </div>
      </div>
    </div>
  );
};

export default Client;
