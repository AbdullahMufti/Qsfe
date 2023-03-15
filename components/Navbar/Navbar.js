import TopRow from "./TopRow";
import { Image } from "next/image";
import AuthSection from "./AuthSection";
import Link from "next/link";
import almawridblack from "../../public/almawridblack.png";
export default function Navbar() {
  return (
    <div className="navbar bg-green-700">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <TopRow />
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          <img
            src="/almawridblack.png"
            height="50"
            width="200"
            alt="Al-Mawrid"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <TopRow />
        </ul>
      </div>
      <AuthSection />
    </div>
  );
}
