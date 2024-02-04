import React, { useState } from "react";
import "../navbar/header.css";
import dashWhite from "../assets/dashboard-white.svg";
import dashBlk from "../assets/dashboard-blk.svg";
import tsoulLogo from "../assets/t-soul-logo.svg";
import soulLogo from "../assets/soul-logo.svg";

export default function Aside() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <aside className="flex flex-col md:w-[17%] w-[10%] max-h-dvh fixed left-0 top-0 z-10 bg-[#fff] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
        <div className="flex w-full items-center justify-center px-4 py-8">
          <button onClick={handleShow} className="w-8 h-4 md:hidden block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 18L4 18M17 12L4 12M14 6L4 6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <div className="hidden md:block">
            <img src={tsoulLogo} alt="logo" className="" />
          </div>
        </div>
        {show && (
          <div className="flex flex-col w-full h-full px-[1.5rem] py-[1rem] border1">
          
          </div>
        )}
      </aside>
    </>
  );
}
