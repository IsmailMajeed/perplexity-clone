import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import PrimaryMenu from "./Layout/PrimaryMenu";
import SecondaryMenu from "./Layout/SecondaryMenu";
import SignInIcon from "../Icons/SignInIcon";
import Logo from "../Icons/Logo";

export default function Layout() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="flex h-screen transition-all">
      <PrimaryMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <SecondaryMenu showMenu={showMenu} setShowMenu={setShowMenu} />

      <div className={`bg-primaryBg p-2 text-white lg:rounded-md grow transition-all duration-500 border border-defaultBtn lg:m-2 ${showMenu ? "md:ml-52 lg:ml-52" : "md:ml-20 lg:ml-20"} flex justify-center flex-col items-center overflow-scroll`}>
        <div className="absolute left-4 right-4 top-5 border-b border-defaultBtn pb-4 flex md:opacity-0 transition-all duration-700">
          <div className="flex gap-1 px-2">
            <Logo size={40} />
            <span className="text-2xl">perplexity</span>
          </div>
        </div>
        <Outlet />
        <div className="absolute bottom-5 border-t border-defaultBtn w-full pt-4 flex md:hidden">
          <button className="py-1 flex items-center justify-center gap-2 bg-secondaryBg rounded-md grow mx-2">
            <SignInIcon />
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
