import React, { useState } from "react";
import CommandIcon from "../../Icons/CommandIcon";
import { Backdrop, Tooltip } from "@mui/material";
import FocusIcon from "../../Icons/FocusIcon";
import Dropdown from "../QueryForm/Dropdown";
import { IOSSwitch } from "../QueryForm";

import SubmitArrowIcon from "../../Icons/SubmitArrow";
import CirclePlusIcon from "../../Icons/CirclePlusIcon";
import WebIcon from "../../Icons/WebIcon";
import AcademicIcon from "../../Icons/AcademicIcon";
import MathIcon from "../../Icons/MathIcon";
import WritingIcon from "../../Icons/WritingIcon";
import VideoIcon from "../../Icons/VideoIcon";
import SocialIcon from "../../Icons/SocialIcon";

export default function NewThread() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [searchValue, setSearchValue] = useState('');

  const [checked, setChecked] = useState(false);

  const sanitizeString = (str) => {
    return str.replace(/[^a-zA-Z0-9-_]/g, '-');
  };

  const [showPro, setShowPro] = useState(false);
  const [showFocus, setShowFocus] = useState(false);
  const focusOptions = [
    {
      title: "Web",
      icon: <WebIcon />,
      description: "Search across the entire internet"
    },
    {
      title: "Academic",
      icon: <AcademicIcon />,
      description: "Search for published academic papers"
    },
    {
      title: "Math",
      icon: <MathIcon />,
      description: "Solve equations and find numeric answers"
    },
    {
      title: "Writing",
      icon: <WritingIcon />,
      description: "Generate text or chat without searching the web"
    },
    {
      title: "Video",
      icon: <VideoIcon />,
      description: "Discover and watch videos"
    },
    {
      title: "Social",
      icon: <SocialIcon />,
      description: "Search for discussions and opinions"
    }
  ];

  return (
    <div onClick={() => setOpen(true)} className="relative mx-4 bg-primaryBg border-2 border-gray-600 rounded-full hover:border-btnClr transition-all cursor-pointer overflow-hidden duration-300">
      <input
        placeholder="New Thread"
        readOnly
        className="px-3.5 py-1.5 w-full outline-none text-sm bg-primaryBg cursor-pointer"
      />
      <div className="flex gap-1 items-center absolute top-1/2 -translate-y-1/2 right-3.5 cursor-pointer">
        <CommandIcon size={17} />
        <span style={{ fontSize: '10px' }} className="border border-gray-700 rounded-sm text-gray-500 px-1">
          K
        </span>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={(ev) => {
          ev.stopPropagation();
          handleClose();
        }}
      >
        <div onClick={(e) => e.stopPropagation()} className="bg-secondaryBg rounded-lg p-4 w-full lg:w-3/4 m-5">
          <div className={`relative bg-secondaryBg border-2 border-defaultBtnHover rounded-md`}>
            <textarea
              autoComplete='off'
              required={true}
              onFocus={() => {
                setShowFocus(false)
              }}
              onKeyDown={ev => {
                if (ev.key === 'Enter' && !ev.shiftKey) {
                  ev.preventDefault();
                  submitBtnRef.current.click();
                }
              }}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
              onChange={(ev) => {
                setSearchValue(ev.target.value);
                onClick(ev.target.value, ev.target.value);
              }}
              placeholder={"Ask anything..."}
              className={`w-full min-h-16 max-h-40 resize-none px-4 py-5 bg-secondaryBg outline-none rounded-t-md`}
              value={searchValue}
              rows={1} // set the initial number of rows
              minLength={5}
            />

            <div className="p-2 flex items-center justify-between">
              <div className="flex gap-2">
                <Tooltip className="relative" title="Set a focus for your sources" placement="top">
                  <button onClick={() => setShowFocus(true)} type="button" className={`flex items-center gap-2 text-gray-500 transition-all hover:text-white hover:bg-defaultBtn px-2.5 py-1.5 rounded-full card-${sanitizeString("Focus")}`}>
                    <FocusIcon size={16} />
                    Focus
                  </button>
                  <Dropdown title="Focus" show={showFocus} setShow={setShowFocus}>
                    <div style={{ letterSpacing: '0.01rem' }} className="w-[34rem] grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 z-20">
                      {
                        focusOptions.map((opt, i) => (
                          <div className="hover:bg-secondaryBg transition-all duration-200 cursor-pointer p-2 rounded-sm flex flex-col gap-1" key={i}>
                            <span className={`flex items-center gap-1 ${i === 0 && 'text-btnClr'}`}>
                              {opt.icon}
                              {opt.title}
                            </span>
                            <p className="text-xs text-gray-500">
                              {opt.description}
                            </p>
                          </div>
                        ))
                      }
                    </div>
                  </Dropdown>
                </Tooltip>
                <Tooltip title="Attach text or PDF files. Sign in to attach files." placement="top">
                  <button className="flex items-center gap-2 text-gray-500 transition-all hover:text-white hover:bg-defaultBtn px-2.5 py-1.5 rounded-full">
                    <CirclePlusIcon size={16} />
                    Attach
                  </button>
                </Tooltip>
              </div>
              <div className="flex items-center gap-3">
                <div onMouseEnter={() => setShowPro(true)} onMouseLeave={() => setShowPro(false)}>
                  <div className="text-sm flex items-center text-gray-500 cursor-pointer hover:text-white transition-all relative">
                    <IOSSwitch checked={checked} setChecked={setChecked} sx={{ m: 1 }} />
                    <span>Pro</span>
                  </div>
                  <Dropdown right={true} title="Pro" show={showPro} setShow={setShowPro}>
                    <div className="w-80 p-2 flex flex-col gap-1">
                      <h2 className="text-lg"><span className="text-btnClr">Pro</span> Search</h2>
                      <p>
                        Our most powerful search, ideal for longer answers to complex questions
                      </p>
                      <div>
                        <button className="flex items-center gap-1 rounded-sm bg-defaultBtn hover:bg-defaultBtnHover transition-colors px-2 py-1.5">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </Dropdown>
                </div>

                <button disabled={searchValue.length === 0} className={`${searchValue.length ? 'text-btnClr' : 'text-defaultBtn'} transition-all`}>
                  <SubmitArrowIcon size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Backdrop>
    </div>
  );
}