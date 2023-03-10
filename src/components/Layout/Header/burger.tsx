import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LogoutFunc } from "lib/loginFunc";


export const Burger = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);


  return (
    <div className="mobile-view flex-col absolute inset-y-0 right-0">
      <div className="overflow-hiden rounded-full w-48 h-16 mb-2 flex  hover:cursor-pointer">
        <Image onClick={() => setDropdownOpen(!dropdownOpen)} className="absolute w-10 bottom-0 inset-y-0 right-0"
         src={"/../public/menu-icon.ico"}
         width={10}
         height={20}
         alt="icon" />
      </div>
      <div
        className={`${dropdownOpen ? `top-full opacity-100 visible` : "top-[110%] invisible opacity-0"}
         absolute overflow-show flex-col left-0 z-40 mt-2 w-full rounded border-[.5px] border-light bg-blue-600 px-5  py-5 shadow-card transition-all`}>
        <ul className="navbar-nav mr-auto flex flex-col">
          <li className="">
            <Link
              className="nav-link block pr-2 lg:px-2 py-2 text-white  transition duration-150 ease-in-out"
              href="/"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light">
              Home
            </Link>
          </li>
          <li className="">
            <Link
              className="nav-link block pr-2  text-white lg:px-2 py-2  "
              href="/creator"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light">
              Creator
            </Link>
          </li>
          <li className="">
            <Link
              className="nav-link block pr-2 text-white lg:px-2 py-2 "
              href="/setings"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light">
              Setings
            </Link>
          </li>
          <li className="">
            <span className="nav-link block pr-2 text-white lg:px-2 py-2 ">
              <LogoutFunc />
            </span>

          </li>
          <li className="">
          </li>
        </ul>
      </div>
    </div>
  );
};