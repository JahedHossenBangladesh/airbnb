import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


function Header({placeholder}) {
  const [search, setSearch] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
const router = useRouter();
const selectionRange = {
  startDate: startDate,
  endDate: endDate,
  key: "selection",
};
const handleSelect=(ranges)=>{
    setstartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  
  }

const reSetSearch = () => {
  setSearch("");
}
const searchs = () => {
  router.push(
    {
      pathname: "/search",
      query: {
        location:search,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        numOfGuests:numOfGuests,
      },
     
    },
     setSearch("")
  )
};

  return (
    <header className="sticky top-0 z-50 grid bg-white grid-cols-3 shadow-md py-3 px-5">
      <div onClick={() => router.push("/")} 
      className="relative flex items-center h-10 cursor-pointer">
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="flex-grow bg-transparent outline-none pl-5 text-xs"
          placeholder={placeholder || "search your item"}
        />
        <SearchIcon className="hidden md:inline-flex h-8  bg-red-400 rounded-full text-white p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex space-x-2 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center justify-center space-x-2 border-2 rounded-full p-1">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {search && (

        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate= {new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
            <UsersIcon className="h-5"/>
            <input type="number" 
         value={numOfGuests}
         onChange={ e => setNumOfGuests(e.target.value)
          }   className='w-12 pl-2 text-lg text-red-800 outline-none' />
          </div>
          <div className ="flex">
            <button onClick={reSetSearch} className="flex-grow text-gray-500">Cancel
            </button>
            <button onClick={searchs} className="flex-grow  text-red-500">Search</button>
            </div>
        </div>
      )}
    </header>
  );
}

export default Header;
