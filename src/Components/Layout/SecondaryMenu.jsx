import React from "react";
import Logo from "../../Icons/Logo";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "@mui/material";

import OpenIcon from "../../Icons/OpenIcon";
import PlusIcon from "../../Icons/PlusIcon";
import SearchIcon from "../../Icons/SearchIcon";
import DiscoverIcon from "../../Icons/DiscoverIcon";
import LibraryIcon from "../../Icons/LibraryIcon";
import SignInIcon from "../../Icons/SignInIcon";

export default function SecondaryMenu({ showMenu, setShowMenu }) {
  const { pathname } = useLocation();
  return (
    <div
      className={`z-10 w-20 text-white shrink-0 py-5 absolute max-md:-left-full ${!showMenu ? "md:left-0" : "md:-left-full"} transition-all duration-500 min-h-screen flex flex-col items-center justify-between`}>
      <div className="flex flex-col items-center gap-7">
        <Link to="/" className="hover:scale-110 transition-all duration-300">
          <Logo className="text-white" size={40} />
        </Link>
        <div>
          <Tooltip title="New Thread" placement="right">
            <button className="bg-defaultBtn hover:bg-defaultBtnHover hover:text-gray-400 p-2.5 rounded-full transition-all mb-2">
              <PlusIcon size={22} />
            </button>
          </Tooltip>
        </div>
        <div className="px-1">
          <Tooltip title="Search" placement="right">
            <Link to='/' className={`hover:bg-defaultBtn block text-center py-2.5 px-6 transition-all rounded-sm relative ${pathname === '/' ? 'text-white' : 'text-gray-400'}`}>
              <SearchIcon className="w-5" />
              {
                pathname === "/" && (
                  <div className="border absolute -right-1.5 top-0 bottom-0 rounded-l-full" />
                )
              }
            </Link>
          </Tooltip>
          <Tooltip title="Discover" placement="right">
            <Link to='/' className={`hover:bg-defaultBtn block text-center py-2.5 px-6 transition-all rounded-sm relative ${pathname === '/discover' ? 'text-white' : 'text-gray-400'}`}>
              <DiscoverIcon className="w-5" />
              {
                pathname === "/discover" && (
                  <div className="border absolute -right-1.5 top-0 bottom-0 rounded-l-full" />
                )
              }
            </Link>
          </Tooltip>
          <Tooltip title="Library" placement="right">
            <Link to='/' className={`hover:bg-defaultBtn block text-center py-2.5 px-6 transition-all rounded-sm relative ${pathname === '/library' ? 'text-white' : 'text-gray-400'}`}>
              <LibraryIcon className="w-5" />
              {
                pathname === "/library" && (
                  <div className="border absolute -right-1.5 top-0 bottom-0 rounded-l-full" />
                )
              }
            </Link>
          </Tooltip>
          <Link to='/' className={`hover:bg-defaultBtn block text-center py-2.5 px-6 transition-all rounded-sm relative ${pathname === '/sign-in' ? 'text-white' : 'text-gray-400'}`}>
            <SignInIcon className="w-5" />
            {
              pathname === "/sign-in" && (
                <div className="border absolute -right-1.5 top-0 bottom-0 rounded-l-full" />
              )
            }
          </Link>
        </div>

      </div>

      <Tooltip title="Expand" placement="right">
        <button className="bg-defaultBtn hover:bg-defaultBtnHover hover:text-gray-400 p-2.5 rounded-full transition-all mb-2" onClick={() => setShowMenu(!showMenu)}>
          <OpenIcon size={23} />
        </button>
      </Tooltip>
    </div>
  );
}
