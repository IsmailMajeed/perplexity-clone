import React, { useMemo, useState } from "react";
import QueryForm from "../Components/QueryForm";
import { Link } from "react-router-dom";
import { AiFillQuestionCircle } from "react-icons/ai";

export default function Index() {
  const [query, setQuery] = useState('');
  const options = useMemo(() =>
    [
      "The birthday of Linux",
      "Marc Andreessen's Reading List",
      "The New Bananageddon Fungus",
      "Brain Pacemaker Fights Parkinsons",
      "Uranus’s Moons May Harbor Oceans",
      "Second Largest Diamond Found"
    ]
    , []);

  const links = useMemo(() =>
    [
      "Pro",
      "Enterprise",
      "Playground",
      "Blog",
      "Encyclopedia",
      "Careers",
    ]
    , []);

  return (
    <div className="w-full flex flex-col gap-10 items-center" style={{
      letterSpacing: '0.05rem'
    }}>
      <h1 className="text-center">Where knowledge begins</h1>
      <QueryForm
        title={query}
        options={options}
        onClick={(val) => {
          setQuery(val);
        }}
        placeholder="Ask anything..."
      />
      <div className="flex gap-3 flex-wrap justify-center text-gray-500 text-sm absolute bottom-7 max-md:hidden">
        {
          links.map((link, i) => (
            <Link className="hover:underline" to="#" key={i}>{link}</Link>
          ))
        }
        <select className="bg-primaryBg outline-none hover:underline w-36 text-ellipsis">
          <option value="en-US">English(English)</option>
          <option value="fr-FR">French (Français)</option>
          <option value="de-DE">Standard German (Deutsch)</option>
          <option value="ja-JP">Japanese (日本語)</option>
          <option value="ko-KR">Korean (한국어)</option>
          <option value="zh-CN">Simplified Chinese (简体中文)</option>
          <option value="es-ES">Spanish (Español)</option>
          <option value="hi-IN">Hindi (हिंदी)</option>
        </select>
      </div>
      <span className="absolute right-6 bottom-6 transition-all max-md:hidden">
        <AiFillQuestionCircle size={35} />
      </span>
    </div>
  );
}
