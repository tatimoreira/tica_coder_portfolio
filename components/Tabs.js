import React, { useState } from "react";
import Paragraph from "./Paragraph";
import { useTranslation, Trans } from "react-i18next";
import Li from "./Li";

export const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const { t, i18n } = useTranslation();
  const jobsArray = i18n.t("jobsArray", { returnObjects: true });

  const [value, setValue] = React.useState("Parsley Health");
  const [show, setShow] = useState(false);

  const handleSelect = (value)=>{
    setShow(!show);
    setValue(value)
  }

  return (
    <>
      <div className="hidden ">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row  "
            role="tablist"
          >
            {jobsArray.map((element, index) => {
              return (
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setValue(element.companyName);
                    }}
                    className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal border-2  ${
                      value === element.companyName
                        ? `text-white bg-colorPop2`
                        : `text-colorPop2 bg-white`
                    } `}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    <i className="fas fa-space-shuttle text-base mr-1"></i>
                    {element.companyName}
                    <br />
                    <span>{element.date}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div class="p-4">
      
</div>
      <form className="flex flex-col ">
        <button
         className="form-select appearance-none
         block
         w-full
         px-3
         py-2
         text-base
         font-normal
         text-primary
         bg-transparent
         border border-solid border-gray-300
         rounded
         transition
         ease-in-out
         m-0
         mb-2
         mt-2
         focus:text-primary focus:bg-transparent focus:border-primary focus:outline-none"
          name="selectList"
          id="selectList"
          onClick={() => setShow(!show)}
        >
          
          {value}
        </button>
        {
          show && (
            <ul className="border border-primary border-gray-300 flex flex-col items-center mb-3">
            {jobsArray.map((element) => {
              return (
              
                  <li className={`${
                    value === element.companyName ? "text-primary" : "text-colorPop2"
                  } p-1 hover:text-secondary   cursor-pointer  `} value={element.companyName} key={element.companyName} onClick={(e) => setValue(element.companyName)}>
                  
                    {`${element.companyName} `}
                  </li>
                   
              );
            })}
          </ul>

          )
        }
       

    
      </form>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-sm border-2 p-4 border-secondary">
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">
            {jobsArray.map((element, index) => {
              return (
                <div
                  className={value === element.companyName ? "block" : "hidden"}
                  id={`link${index + 1}`}
                >
                  <Paragraph text={element.date}></Paragraph>
                  <br/>
                  <Paragraph
                    text={`${element.position} ${element.mode}`}
                  ></Paragraph>
                  <br />
                  <br />
                  <ul className="list-disc ">
                    {element?.description?.map((d) => {
                      return <Li text={d}></Li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
