import { Link } from "next/link";
import SubMenu from "./SubMenu";

export default function DropDowns({ tabIndex, title, sublist }) {
  return (
    <li tabIndex={tabIndex}>
      <a className="flex">
        {title}
        <svg
          className="fill-current hidden lg:flex"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>

        <svg
          className="fill-current lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </a>
      <ul
        tabIndex={tabIndex}
        className="p-2 bg-gray-100 border-2 border-green-300"
      >
        {sublist.map(
          (EachItem, ind) =>
            typeof EachItem[0] === "string" && (
              <li key={ind}>
                <div className="hover:bg-gray-700 text-black hover:text-white">
                  <a href={EachItem[1]}>{EachItem[0]}</a>
                </div>
              </li>
            )
        )}
        {sublist.map(
          (EachItem, ind) =>
            typeof EachItem[0] !== "string" && (
              <SubMenu
                key={ind}
                subtitle={EachItem[0]}
                tabIndex={EachItem[1]}
                subsublist={EachItem[2]}
              />
            )
        )}
      </ul>
    </li>
  );
}
