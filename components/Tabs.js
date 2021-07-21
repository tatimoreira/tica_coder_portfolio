import React from "react";
import Paragraph from "./Paragraph";
import { useTranslation, Trans } from "react-i18next";

export const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const { t, i18n } = useTranslation();
  const jobsArray = i18n.t('jobsArray', { returnObjects: true });
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {
              jobsArray.map((element, index) => {
                return (
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
                <a
              
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(index+1);
                  }}
                  className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${openTab === index+1 ? `text-white bg-colorPop2`  : `text-colorPop2 bg-white`} `}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <i className="fas fa-space-shuttle text-base mr-1"></i> 
                  {element.companyName}
                  <br/><span>{element.date}</span>
                </a>
              </li>);
              })
            }
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
          
                {
                  jobsArray.map((element, index) => {
                    return(
                      <div className={openTab === index +1 ? "block" : "hidden"} id={`link${index+1}`}>
                       <Paragraph text={element.position}></Paragraph>
                    </div>
                     
                    )
                  })
                }
         
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

