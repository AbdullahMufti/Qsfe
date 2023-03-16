"use client";
import { useState } from "react";
import { useRouter } from "next/router";
export default function SearchBar({ ParamQuery }) {
  console.log(ParamQuery);
  const router = useRouter();

  const [searchKW, setSearchKW] = useState(ParamQuery || "");

  const SearchNow = () => {
    // e.preventDefault();
    if (searchKW.trim() !== "") {
      router.push(`/SearchQuestion/${searchKW}`);
    }
  };

  return (
    <>
      {" "}
      <div className="md:w-[584px] mx-auto mt-7 flex w-[92%] items-center rounded-full border hover:shadow-md">
        <input
          placeholder="Search Keywords"
          type="text"
          className="w-full bg-transparent rounded-full py-[14px] pl-4 ml-2 outline-none"
          value={searchKW}
          onChange={(e) => setSearchKW(e.target.value)}
        />
        <div
          className=" btn btn-circle  fill-white overflow-hidden rounded-full"
          onClick={() => SearchNow()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
