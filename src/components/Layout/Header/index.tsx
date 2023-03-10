import { FC } from "react"
import Link from "next/link"
import { Burger } from "./burger"
import { CreateUser } from "lib//userTag"
import { LogoutFunc } from "lib/loginFunc"
import Image from "next/image"
import { SearchBar } from "./search"

export const Header: FC = () => {
  return (
    <header className="header flex w-full items-center from-black justify-between px-2 pb6 h-20 z-10">
      <div className="mobile-view text-white flex-col">
        <CreateUser />
        <span className="text-black">
          <SearchBar />
        </span>
      </div>
      <div className="flex items-center py-4 mx-auto justify-between w-full">
        <nav className="navbar navbar-expand-lg shadow-md py-2 relative dark:text-grey flex items-center w-full">
          <div className="w-full flex flex-wrap items-center justify-between text-grey ">
            <div className="block ml-0 pr-2 lg:px-2 py-2 desktop-view">
              <Link href="/">
                <Image
                  width={70}
                  height={40}
                  className="mr-2 overflow-hidden"
                  src={"/../public/FClogo.jpg"}
                  alt={"FC logo"}
                ></Image>
              </Link>
            </div>
            <div>
              <div className="desktop-view flex justify-between mx-auto">
                <ul className="navbar-nav mr-auto flex lflex-row">
                  <li className="nav-item hover:bg-sky-300">
                    <Link
                      className="nav-link block pr-2 lg:px-2 py-2  transition duration-150 ease-in-out"
                      href="/"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item hover:bg-sky-300">
                    <Link
                      className="nav-link block pr-2 lg:px-2 py-2  "
                      href="/creator"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Creator
                    </Link>
                  </li>
                  <li className="nav-item hover:bg-sky-300">
                    <Link
                      className="nav-link block pr-2 lg:px-2 py-2 "
                      href="/setings"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Setings
                    </Link>
                  </li>
                  <li className="nav-item hover:bg-sky-300">
                    <span className="nav-link block pr-2 lg:px-2 py-2">
                      <LogoutFunc />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="desktop-view">
              <SearchBar />
            </div>
            <div className="desktop-view text-sky-500">
              <CreateUser />
            </div>
            <Burger />
          </div>
        </nav>
      </div>
    </header>
  )
}
