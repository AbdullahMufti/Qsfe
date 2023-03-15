"use client";
import { useState } from "react";

export default function SubMenu({ subtitle, tabIndex, subsublist }) {
  const [show, setShow] = useState(false);
  return (
    <li tabIndex={tabIndex}>
      <a onClick={() => setShow(!show)} className="flex">
        {subtitle}

        <svg
          className="fill-current inline"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </a>
      {show && (
        <ul className="p-2 " tabIndex={tabIndex}>
          {subsublist.map((EachItem, ind) => (
            <li
              key={ind}
              className="hover:bg-gray-700 text-black hover:text-white"
            >
              <a href={EachItem[1]}>{EachItem[0]}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
