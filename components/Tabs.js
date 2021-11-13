import React from "react";
import Paragraph from "./Paragraph";
import { useTranslation, Trans } from "react-i18next";
import Li from "./Li";

export const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const { t, i18n } = useTranslation();
  const jobsArray = i18n.t("jobsArray", { returnObjects: true });

  const [value, setValue] = React.useState("Parsley Health");

  return (
    <>
      <div className="hidden md:flex md:flex-wrap ">
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
      <form className="flex flex-col md:hidden ">
        <select
          className="border-2 text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-colorPop2"
          name="selectList"
          id="selectList"
          onChange={(e) => setValue(e.currentTarget.value)}
        >
          {jobsArray.map((element) => {
            return (
              <>
                 {" "}
                <option value={element.companyName} key={element.companyName}>
                  {" "}
                  {`${element.companyName} - ${element.date}`}
                </option>
                 
              </>
            );
          })}
        </select>
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
                  <Paragraph
                    text={`${element.position} ${element.mode}`}
                  ></Paragraph>
                  <br />
                  <br />
                  <ul className="list-disc">
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
