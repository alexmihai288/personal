import React, { useState, useRef } from "react";
import Image from "next/image";
import MainLayout from "../projectsPage/layout/MainLayout";
import emailjs from 'emailjs-com';

const Contact = () => {
  emailjs.init('L7Bcdi--S9gBxqJIl')
  const contactText=useRef();
  const [inputs,setInputs]=useState({
    firstName:"",
    lastName:"",
    email:"",
    about:""
  })
  const [submitted,setSubmitted]=useState(false);

  function sendEmail() {
    emailjs.send('service_zhtm9p4', 'template_uibvcbk', {
      to: 'moldovanalexismihai06@gmail.com',
      lastName: inputs.lastName,
      firstName:inputs.firstName,
      message: inputs.about,
      email:inputs.email
    },'L7Bcdi--S9gBxqJIl')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  
  const textInputs=[inputs.firstName.trim(),inputs.lastName.trim(),inputs.about.trim()];
  const emailInput=inputs.email;
  function validateForm(e){
    e.preventDefault();
    setSubmitted(true);
    const allFilled = textInputs.every(item=>valueNotEmpty(item));
    const emailFilled = isEmail(emailInput)
    
    if(allFilled && emailFilled){
      setFormStatus("Message was sent !")
      sendEmail();
    }
    else
      setFormStatus("You must fill all the inputs !")
    clearForm();
  }
  
  function setFormStatus(message){
    contactText.current.textContent=message;
  }
  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
  function valueNotEmpty(item){
    return item.trim()!==""
  }

  function clearForm(){
    setTimeout(() => {
      setFormStatus("")
      setInputs({
        firstName:"",
        lastName:"",
        email:"",
        about:""    
      })
      setSubmitted(false);
    }, 2000);
  }

  return (
    <>
      <main className="bg-luxBrown h-max">
        <MainLayout>
          <div className="contactWrapper self-center font-karla h-[100%] my-auto w-[100%] flex justify-center">
            <div className="contactContainer text-[#1b0e0e] max-w-[450px] h-[100%] w-[100%]  md:max-w-[1000px] flex flex-col md:flex-row md:justify-center">
              <div className="leftSide logoContainer bg-[#f8f8f8] md:flex-[1.3] p-2 rounded-t-md md:rounded-none md:rounded-tl-md md:rounded-bl-md">
                <div className="mb-8 flex justify-self-start">
                  <h1 className='font-inter font-bold text-[20px] xs:text-[25px] relative after:content-[""] after:w-[38.8%] after:h-[1.3px] xs:after:h-[2px] after:bg-[#1b0e0e] after:absolute after:-bottom-[2px] after:left-0'>
                    Send Me A Message
                  </h1>
                </div>
                <form className="contactInputContainer flex flex-col gap-6">
                  <div className="nameContainer flex flex-col gap-4">
                    <div className="firstNameContainer flex">
                      <div className="bg-luxBrown px-2 py-2 text-[#f8f8f8] rounded-tl-md rounded-bl-md">
                        <i className="bi bi-person-fill text-[18px] xs:text-[20px]"></i>
                      </div>
                      <div className="border border-[rgba(0,0,0,0.35)] w-[100%] flex items-center">
                        <input
                          type="text"
                          name="fName"
                          value={inputs.firstName}
                          onChange={e=>setInputs({...inputs,firstName:e.target.value})}
                          placeholder="first name"
                          className="h-[100%] px-2 text-luxBrown w-[100%] outline bg-transparent outline-none border-none"
                        />
                        {
                          submitted ? 
                            valueNotEmpty(inputs.firstName) ? 
                                (<i className="bi bi-check2 text-green-700 -ml-5"></i>):(<i className="bi bi-exclamation-lg text-red-700"></i>)
                              :("")
                        }
                      </div>
                    </div>
                    <div className="lastNameContainer flex">
                      <div className="bg-luxBrown px-2 py-2 text-[#f8f8f8] rounded-tl-md rounded-bl-md">
                        <i className="bi bi-person-fill text-[18px] xs:text-[20px]"></i>
                      </div>
                      <div className="border border-[rgba(0,0,0,0.35)] w-[100%] flex items-center">
                        <input
                          type="text"
                          placeholder="last name"
                          value={inputs.lastName}
                          onChange={e=>setInputs({...inputs,lastName:e.target.value})}
                          name="lName"
                          className="h-[100%] px-2 text-luxBrown w-[100%] outline bg-transparent outline-none border-none"
                        />
                        {
                          submitted ? 
                            valueNotEmpty(inputs.lastName) ? 
                                (<i className="bi bi-check2 text-green-700 -ml-5"></i>):(<i className="bi bi-exclamation-lg text-red-700"></i>)
                              :("")
                        }
                      </div>
                    </div>
                  </div>
                  <div className="emailContainer">
                    <div className="email flex">
                      <div className="bg-luxBrown px-2 py-2 text-[#f8f8f8] rounded-tl-md rounded-bl-md">
                        <i className="bi bi-envelope-fill text-[18px] xs:text-[20px]"></i>
                      </div>
                      <div className="border border-[rgba(0,0,0,0.35)] w-[100%] flex items-center">
                        <input
                          type="text"
                          value={inputs.email}
                          onChange={e=>setInputs({...inputs,email:e.target.value})}

                          placeholder="email"
                          name="email"
                          className="h-[100%] px-2 text-luxBrown w-[100%] outline bg-transparent outline-none border-none"
                        />
                         {
                          submitted ? 
                            isEmail(inputs.email) ? 
                                (<i className="bi bi-check2 text-green-700 -ml-5"></i>):(<i className="bi bi-exclamation-lg text-red-700"></i>)
                              :("")
                        }                  
                      </div>
                    </div>
                  </div>
                  <div className="aboutContainer">
                    <div className="about flex">
                      <div className="bg-luxBrown px-2 text-[#f8f8f8] rounded-tl-md rounded-bl-md">
                        <i className="bi bi-card-text text-[18px] xs:text-[20px]"></i>
                      </div>
                      <div className="border border-[rgba(0,0,0,0.35)] w-[100%] h-[100%] flex items-center">
                        <textarea
                          name="about"
                          value={inputs.about}
                          onChange={e=>setInputs({...inputs,about:e.target.value})}
                          className="w-[100%] h-[100%] outline-none resize-none px-2 py-1 bg-transparent"
                          rows={2}
                          placeholder="about"
                        ></textarea>
                          {
                          submitted ? 
                            valueNotEmpty(inputs.about) ? 
                                (<i className="bi bi-check2 text-green-700 -ml-5"></i>):(<i className="bi bi-exclamation-lg text-red-700"></i>)
                              :("")
                        }
                      </div>
                    </div>
                  </div>

                  <div className="submitContainer flex items-center justify-center mt-5 flex-col">
                    <button
                      type="submit"
                      onClick={validateForm}
                      className="text-[19px] xs:text-[20px] cursor-pointer text-luxBrown hover:bg-[#1f0f0f] active:scale-[.98] hover:text-[#f8f8f8] sendButton py-2 flex items-center justify-center gap-2 bg-transparent rounded-lg w-[100%] max-w-[130px] border-2 border-[#1f0f0f] duration-100"
                    >
                      <p>Send</p>
                      <i className="bi bi-send"></i>
                    </button>
                    <div className="contactStatusContainer mt-3">
                      <p className="font-source text-[13.5px]" ref={contactText}></p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="rightSide relative bg-[#d0c9c7] p-2 md:flex-[1] flex items-center">
                <div className="info flex flex-col gap-2 text-[17px] md:gap-5">
                  <div className="flex items-center gap-2">
                    <div className="border-2 border-luxBrown rounded-full flex items-center justify-center w-fit px-1.5 py-0.5">
                      <i className="bi bi-geo-fill text-[#f8f8f8]"></i>
                    </div>
                    <p className="text-[14px] text-luxBrown font-semibold">
                      Address:{" "}
                      <span className="text-[#717195]">
                        Main Street, Voinicilor
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="border-2 border-luxBrown rounded-full flex items-center justify-center w-fit px-1.5 py-0.5">
                      <i className="bi bi-telephone-outbound-fill text-[#f8f8f8]"></i>
                    </div>
                    <p className="text-[14px] text-luxBrown font-semibold">
                      Phone:{" "}
                      <span className="text-[#717195]">(+40) 75625627</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="border-2 border-luxBrown rounded-full flex items-center justify-center w-fit px-1.5 py-0.5">
                      <i className="bi bi-envelope-at-fill text-[#f8f8f8]"></i>
                    </div>
                    <p className="text-[14px] text-luxBrown font-semibold z-10">
                      Email:{" "}
                      <span className="text-[#717195]">
                        dennismoldovan32@gmail.com
                      </span>
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-[50%] translate-x-[-50%]">
                     <small className="whitespace-nowrap">Your information will only be used for the purpose of contacting</small>
                  </div>
                </div>
                <div className="imageRight absolute right-0 hidden md:block">
                  <Image
                    src={"/images/imageContact.png"}
                    width={4050}
                    height={4050}
                    className="z-0 opacity-50 w-[100px] h-[200px] lg:w-[125px] lg:h-[225px]"
                    alt="imageRight"
                  />
                </div>
                <div className="curlyIcon absolute -right-11 -bottom-11 rotate-180 hidden md:block">
                  <Image
                    src={"/images/icons8-curly-arrow-50.png"}
                    width={4050}
                    height={4050}
                    className="opacity-50 w-[50px] h-[50px]"
                    alt="curlyIcon"
                  />
                </div>
              </div>
            </div>
          </div>
          
        </MainLayout>
      </main>
    </>
  );
};

export default Contact;
