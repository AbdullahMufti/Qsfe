import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/images/avatar.gif";

export default function AuthSection({ Component, pageProps }) {
  return (
    <div className="flex-1 justify-end ">
      <div className="dropdown dropdown-end">
        <Link href="https://al-mawrid.org/">Login</Link>
      </div>
      {/*      <div className="dropdown dropdown-end">
        <label tabIndex={4} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image src={avatar} height="70" width="70" alt="gif image" />
          </div>
        </label>
        <ul
          tabIndex={4}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
  */}{" "}
    </div>
  );
}
