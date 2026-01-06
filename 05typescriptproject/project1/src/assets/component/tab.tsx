// import type {FaPhone ,FaInfoCircle, FaHome} from "react-icons/fa";
import Card from "./card";
import Contact from "./contact";
import { useState } from "react";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiCoursera } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import About from "./about";


const tabs     = [
  {
    id: "home",
    icon:<FaHome/>,
    label: "Home",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://picsum.photos/id/22/367/267"
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon:<FaInfoCircle/>,
    label: "About",
    content:<About/>,
  },
  {
    id: "projects",
    icon:<GoProjectSymlink/>,
    label: "Projects",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://picsum.photos/id/22/367/267"
          />
        ))}
      </div>
    ),
  },
  {
    id: "courses",
    icon:<SiCoursera/>,
    label: "Courses",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
           
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://picsum.photos/id/22/367/267"
          />
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    icon:<FaPhone/>,
    label: "Contact",
    content: <Contact/>,
  },
];

const Tabs=()=>{
  const [activeTab,setActiveTab]=useState(tabs[0].id)
    return <>
        <div className="p-4  mt-[3rem]">
            <div className="flex border-b ml-[7rem] border-gray-200">
                {
                  tabs.map((tab)=>(
                    <button  key={tab.id} className={`flex-1 text-center py-2 px-4 font-medium text-sm ${
                  activeTab === tab.id ? "border-b-2 " : "text-gray-600"
                }`} 
                onClick={()=>setActiveTab(tab.id)}
                >
                <div className="flex items-center justify-center space-x-2">
                  {tab.icon}
                  <span>{tab.label}</span>
                </div>
                </button> 
              ))}
            </div>
              <div className="mt-4 ml-[6rem] p-4 rounded-lg">
                {tabs.find((tab) => tab.id === activeTab)?.content}
              </div>
        </div>
    </>
}
export default Tabs