import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";


function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md py-3 px-5">
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src="https://i.ibb.co/4mN3gSw/Airbnb-Logo-B-lo-svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="logo"
        />
      </div>
      <div className="flex  items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          className="flex-grow bg-transparent outline-none pl-5"
          placeholder="search your item"
        />
        <SearchIcon className="hidden md:inline-flex h-8  bg-red-400 rounded-full text-white p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex space-x-2 items-center justify-end text-gray-500">
        <p  className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center justify-center space-x-2 border-2 rounded-full p-1">
          <MenuIcon className="h-6 cursor-pointer"/>
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
