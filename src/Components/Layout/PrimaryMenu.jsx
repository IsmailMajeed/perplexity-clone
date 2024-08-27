import React from "react";
import NewThread from "./NewThread";
import { Tooltip } from "@mui/material";

import Logo from "../../Icons/Logo";
import CloseIcon from "../../Icons/CloseIcon";
import SearchIcon from "../../Icons/SearchIcon";
import DiscoverIcon from "../../Icons/DiscoverIcon";
import LibraryIcon from "../../Icons/LibraryIcon";
import SignInIcon from "../../Icons/SignInIcon";
import LearnMoreIcon from "../../Icons/LearnMoreIcon";
import X_Icon from "../../Icons/xIcon";
import DiscordIcon from "../../Icons/DiscordIcon";
import MobileIcon from "../../Icons/MobileIcon";
import { Link, useLocation } from "react-router-dom";

export default function PrimaryMenu({ showMenu, setShowMenu }) {
  const { pathname } = useLocation();
  return (
    <div className={`z-10 w-52 text-white shrink-0 py-5 absolute max-md:-left-full ${showMenu ? "md:left-0" : "md:-left-full"} transition-all duration-500 min-h-screen flex flex-col justify-between`}>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between mx-4">
          <div className="flex gap-1">
            <Logo size={40} />
            <span className="text-2xl">perplexity</span>
          </div>
          <Tooltip title="Collapse" placement="bottom">
            <button className="text-gray-400" onClick={() => setShowMenu(!showMenu)}>
              <CloseIcon size={15} />
            </button>
          </Tooltip>
        </div>
        <NewThread />
        <div className="px-1">
          <Link to="/" className={`hover:bg-secondaryBgHover flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200 ${pathname === '/' ? 'text-white' : 'text-gray-400'} hover:text-white`}>
            <SearchIcon />
            <span>Home</span>
          </Link>
          <Link to="/" className={`hover:bg-secondaryBgHover flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200 ${pathname === '/discover' ? 'text-white' : 'text-gray-400'} hover:text-white`}>
            <DiscoverIcon />
            <span>Discover</span>
          </Link>
          <Link to="/" className={`hover:bg-secondaryBgHover flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200 ${pathname === '/library' ? 'text-white' : 'text-gray-400'} hover:text-white`}>
            <LibraryIcon />
            <span>Library</span>
          </Link>
          <Link to="/" className={`hover:bg-secondaryBgHover flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200 ${pathname === '/sign-in' ? 'text-white' : 'text-gray-400'} hover:text-white`}>
            <SignInIcon />
            <span>Sign in</span>
          </Link>
        </div>

        <button className="bg-btnClr hover:bg-btnClrHover transition-colors duration-200 text-btnTextClr mx-3 py-1.5 rounded-full font-semibold">Sign Up</button>
      </div>
      <div className="text-sm">
        <div className="flex flex-col gap-2 px-3">
          <Link className="hover:text-btnClr transition-all">Try Pro</Link>
          <p className="text-gray-400">
            Upgrade for image upload, smarter AI, and more Pro Search.
          </p>
          <div>
            <button className="flex items-center gap-1 rounded-sm bg-defaultBtn hover:bg-defaultBtnHover transition-colors px-2 py-1.5">
              <LearnMoreIcon size={16} />
              Learn More
            </button>
          </div>
        </div>
        <div className="border-b border-gray-500 my-2" />
        <div className="px-2 flex justify-between items-center text-gray-500">
          <button className="hover:bg-defaultBtn hover:text-white transition-colors px-3 py-1.5 rounded-full flex items-center gap-2">
            <MobileIcon />
            Download
          </button>
          <div>
            <button className="hover:bg-defaultBtn hover:text-white transition-colors px-2 py-1.5 rounded-full">
              <X_Icon />
            </button>
            <button className="hover:bg-defaultBtn hover:text-white transition-colors px-2 py-1.5 rounded-full">
              <DiscordIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
