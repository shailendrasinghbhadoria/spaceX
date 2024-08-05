import React from "react";
import { Link, useLocation } from "react-router-dom";
import SpaceXLogo from "../images/SpaceX-transparent.png";

const Header = () => {
  const location = useLocation();

  return (
    <div className="py-10 pl-5 w-2/12 bg-white h-screen rounded-s-xl shadow-xl">
      <div className="mt-6">
        <Link to={"/"}>
          <img src={SpaceXLogo} className="max-w-full" />
        </Link>
      </div>
      <ul className="mt-[30%]">
        <li className="mb-4">
          <Link
            to={"/"}
            className={`text-2xl p-2 rounded-md hover:bg-[#f5f5f5] ${
              location.pathname === "/" ? "font-bold" : ""
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to={"/rockets"}
            className={`text-2xl p-2 rounded-md hover:bg-[#f5f5f5] ${
              location.pathname === "/rockets" ? "font-bold" : ""
            }`}
          >
            Rockets
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
