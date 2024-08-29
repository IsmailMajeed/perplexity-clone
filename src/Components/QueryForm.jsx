import React, { useCallback, useEffect, useState } from "react";
import UpLeftArrowIcon from "../Icons/UpLeftArrowIcon";
import FocusIcon from "../Icons/FocusIcon";
import { Tooltip } from "@mui/material";
import Dropdown from "./QueryForm/Dropdown";

import CirclePlusIcon from "../Icons/CirclePlusIcon";
import SubmitArrowIcon from "../Icons/SubmitArrow";
import SocialIcon from "../Icons/SocialIcon";
import WebIcon from "../Icons/WebIcon";
import AcademicIcon from "../Icons/AcademicIcon"
import MathIcon from "../Icons/MathIcon"
import WritingIcon from "../Icons/WritingIcon"
import VideoIcon from "../Icons/VideoIcon"

import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export const IOSSwitch = styled(({ checked, setChecked, ...props }) => (
  <Switch checked={checked} onChange={ev => {
    setChecked(ev.target.checked)
  }} focusVisibleClassName=".Mui-focusVisible"
    disableRipple {...props} />
))(({ theme }) => ({
  width: 34, // Reduced the width
  height: 20, // Reduced the height
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(14px)', // Adjusted for the smaller size
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#202222',
        opacity: 1,
        border: '1px solid #2d2f2f',
      },
      '& .MuiSwitch-thumb': { // Change thumb color when checked
        backgroundColor: '#fff', // Thumb color set to white
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#28a745',
      border: '4px solid #eee',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: '#eee',
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: 'gray',
    boxSizing: 'border-box',
    width: 16,
    height: 16,
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    border: '1px solid #2d2f2f',
    backgroundColor: "#191a1a",
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const Card = ({ title, img }) => (
  <div style={{
    letterSpacing: '0.01rem'
  }} className="border border-defaultBtn rounded-md px-1 py-1 cursor-pointer hover:bg-secondaryBg transition-all duration-200 flex items-center gap-2">
    <div className="px-1.5 py-1 bg-imgBg rounded-sm">
      {img}
    </div>
    <span>
      {title}
    </span>
  </div>
)

export default function QueryForm({
  title,
  options,
  onClick,
  placeholder,
  editable = true,
}) {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState(title ?? '');

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setSearchValue(title ?? '')
  }, [title]);

  const handleShow = useCallback(() => {
    setShow(true);
  }, []);

  const handleClick = useCallback((val) => {
    onClick(val);
    setShow(false);
    setSearchValue(val)
  }, [onClick]);

  const sanitizeString = (str) => {
    return str.replace(/[^a-zA-Z0-9-_]/g, '-');
  };

  const handleOutsideClick = useCallback((event) => {
    // Check if the event target is within the sanitized class
    if (!event.target.closest(`.option-card-${title ? sanitizeString(title) : sanitizeString(placeholder)}`)) {
      setShow(false);
    }
  }, [title, placeholder]);

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const [showPro, setShowPro] = useState(false);
  const [showFocus, setShowFocus] = useState(false);
  const focusOptions = [
    {
      title: "Web",
      icon: <WebIcon />,
      description: "Search accross the entire internet"
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
    <div className={`text-sm relative w-full lg:w-[42rem]`}>
      <div className={`relative bg-secondaryBg border-2 border-defaultBtnHover ${show ? 'rounded-t-md' : 'rounded-md'}`}>
        <textarea
          autoComplete='off'
          required={true}
          readOnly={!editable}
          onFocus={handleShow}
          onKeyDown={ev => {
            if (ev.key == 'Enter' && !ev.shiftKey) {
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
          placeholder={placeholder}
          className={`option-card-${title ? sanitizeString(title) : sanitizeString(placeholder)} w-full min-h-16 max-h-40 resize-none px-4 py-5 bg-secondaryBg outline-none rounded-t-md ${!editable ? 'cursor-pointer' : ''}`}
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
                <div style={{
                  letterSpacing: '0.01rem'
                }} className="w-[34rem] grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 z-20">
                  {
                    focusOptions.map((opt, i) => (
                      <div className="hover:bg-secondaryBg transition-all duration-200 cursor-pointer p-2 rounded-sm flex flex-col gap-1">
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
      <div className="absolute left-0 right-0 z-10 bg-primaryBg">
        {
          show && (
            <div className={`min-w-20 flex flex-col gap-1 sm:w-full max-h-60 overflow-scroll border-2 border-imgBg rounded-b-md`}>
              {
                options?.filter((opt) => !editable || opt.toLowerCase().includes(searchValue.toLowerCase())).map((opt, index) => (
                  <div key={index} onClick={() => handleClick(opt)}
                    className="cursor-pointer hover:bg-secondaryBg py-2 px-2 rounded-sm flex justify-between items-center">
                    <span>
                      {opt}
                    </span>
                    <span className="hover:text-btnClr transition-all">
                      <UpLeftArrowIcon />
                    </span>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
      <div className="grid md:grid-cols-2 gap-2 mt-2 p-2">
        <Card img="🚨" title="Penalty for late tax filing" />
        <Card img="📈" title="ETFs to invest in AI" />
        <Card img="🔎" title="What is Perplexity AI?" />
        <Card img="🥦" title="Most common nutrient deficiency" />
      </div>
    </div>
  );
}