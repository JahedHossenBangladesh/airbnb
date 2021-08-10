import { format } from 'date-fns';
import { useRouter } from "next/dist/client/router";
import { useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from '../components/Map';
 


function Search({searchResult}) {
  const [makeColor,setMakeColor] = useState(false);
 const changeTheColor= () =>{
    setMakeColor(true);
 
 }
    const router = useRouter()
    console.log(searchResult);
    const {location,startDate,endDate,numOfGuests} =router.query;
const formatStartDate = format(new Date(startDate),'dd MMMM yy');
const formatEndDate = format(new Date(endDate),'dd MMMM yy');
const range = `${formatStartDate} - ${formatEndDate}`
    return (
      <div>
        <Header
          placeholder={`${location} | ${range} | ${numOfGuests} guests`}
        />
        <main className="flex">
          <section className="flex-grow mt-14 px-6">
            <p className="text-xs">
              300+ Stays - {range} - for {numOfGuests} guests
            </p>
            <h1 className="text-3xl font-semibold mb-6">Stays in {location}</h1>
            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
              <p className="button">Cancellation Flexibility </p>
              <p className="button ">Type of Place</p>
              <p className="button ">Price </p>
              <p className="button" onClick={changeTheColor}>
                Rooms and Beds
              </p>
              <p className="button">More Filters</p>
            </div>
            <div className="flex flex-col">
              {searchResult?.map((item) => (
                <InfoCard key={item.length} item={item} colors={makeColor} />
              ))}
            </div>
          </section>
          {/* <section className="hidden xl:inline-flex
           xl:min-w-[600px]
           "> */}

          <section
            className="min-w-[600px]
           "
          >
            <Map  searchResult={searchResult}/>
          </section>
        </main>
        <Footer />
      </div>
    );
}

export default Search


export async function getServerSideProps() {
    const searchResult = await fetch("https://links.papareact.com/isz").then(res => res.json());
    return {
        props:{
            searchResult:searchResult
        }
    }
}