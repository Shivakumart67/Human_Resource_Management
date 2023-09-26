import React, { useState } from "react";
import Logo from "../../Images/login_logo.png";
import { FaHome } from "react-icons/fa";
import { CgLoadbarDoc } from "react-icons/cg";
import { PiFolderNotchFill } from "react-icons/pi";
import { ImBriefcase } from "react-icons/im";
import { HiTicket } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Navigation({ page }) {
  const nav = useNavigate();
  const activePage = page;

  const handlePageClick = (url) => {
    nav(url);
  };

  return (
    <div>
      <img src={Logo} alt="Logo" className="hrlogo" />
      <div className="hrtext">
        <h3>HR MANAGEMENT</h3>
      </div>

      <ul className="hrorder">
        <li
          className={activePage === "dashboard" ? "hrbtn4 active" : "hrbtn3"}
          onClick={() => handlePageClick("/dashboard")}
        >
          <FaHome className="hrpic" />
          Dashboard
        </li>
        <li
          className={activePage === "leave" ? "hrbtn4 active" : "hrbtn3"}
          onClick={() => handlePageClick("/leave")}
        >
          <ImBriefcase className="hrpic" />
          Leave
        </li>
        <li
          className={activePage === "payslips" ? "hrbtn4 active" : "hrbtn3"}
          onClick={() => handlePageClick("/payslips")}
        >
          <CgLoadbarDoc className="hrpic" />
          Pay Slips
        </li>
        <li
          className={activePage === "ticket" ? "hrbtn4 active" : "hrbtn3"}
          onClick={() => handlePageClick("/ticket")}
        >
          <HiTicket className="hrpic" />
          Rise a Ticket
        </li>
        <li
          className={activePage === "directory" ? "hrbtn4 active" : "hrbtn3"}
          onClick={() => handlePageClick("/directory")}
        >
          <PiFolderNotchFill className="hrpic" />
          Directory
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
