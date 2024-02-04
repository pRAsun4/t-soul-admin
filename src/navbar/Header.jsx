import React, { useState } from "react";
import "../navbar/header.css";
import searchIcon from "../assets/search-icon.svg";
import notificationIcon from "../assets/notifications.svg";
import downArrow from "../assets/down-arrow.svg";
import whiteDrop from "../assets/white-drop.svg";
import logoutIcon from "../assets/logout.svg";
import rightArrow from "../assets/arrow-right.svg";

export default function Header() {
  const [openBtn, setOpenBtn] = useState(false);

  const handleOpenBtn = () => {
    setOpenBtn(!openBtn);
  };
  return (
    <>
      <header className="flex fixed items-center justify-end top-0 right-0 md:w-[83%] w-[90%] h-auto xl:px-[3.75rem] xl:py-[1.75rem] ">
        <div className="head-icon-box flex items-center sm:gap-[2.5rem]">
          <button className="search-btn flex items-center justify-center border-none">
            <img src={searchIcon} alt="search icon" className="w-auto" />
          </button>
          <button className="notification-btn flex items-center justify-center border-none">
            <img src={notificationIcon} alt="search icon" className="w-auto" />
          </button>
          <div className="admin-btn relative">
            <button
              style={{ backgroundColor: openBtn ? "#003F62" : "initial" }}
              onClick={handleOpenBtn}
              className=" flex items-center justify-center max-w-[6.125rem] h-[2.5rem] py-[0.7188rem] px-4 gap-[0.25rem] rounded-[0.625rem] border "
            >
              <p
                style={{ color: openBtn ? "#fff" : "#1C1C1A" }}
                className="text-[#1C1C1A] text-[1rem]"
              >
                ADMIN
              </p>
              <img
                src={openBtn ? whiteDrop : downArrow}
                alt="down arrow"
                className="w-auto "
              />
            </button>
            {openBtn && (
              <ul className="drop-down w-[13rem] h-auto flex flex-col p-4 gap-4 items-start absolute bottom-[-9rem] right-0 rounded-[0.625rem] bg-[#fff] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <li>
                  <h3 className="text-[#232321] text-[1rem] ">Admin</h3>
                </li>
                <li className="w-full 0">
                  <button className="w-full flex items-center justify-between">
                    <p className="">Change Password</p>
                    <img src={rightArrow} alt="right arrow" />
                  </button>
                </li>
                <li className="w-full">
                  <button className="w-full flex items-center justify-between">
                    <p className="">log out</p>
                    <img src={logoutIcon} alt="right arrow" />
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
