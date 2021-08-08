import Router from 'next/router';
import { useState } from 'react';
import { HourGlass } from "react-awesome-spinners";
import {
  MeteorRainLoading, SemipolarLoading, TransverseLoading
} from "react-loadingg";
import 'tailwindcss/tailwind.css';
import '../styles/global.css';



function MyApp({ Component, pageProps }) {
  const [loading,setLoading] = useState(false)
  Router.events.on("routeChangeStart", () => {
    setLoading(true)
  })
  Router.events.on("routeChangeComplete", () => {
    setLoading(false)
  })
  return (
    <>
      {" "}
      {loading && (
        <div>
          <SemipolarLoading />
        
          <TransverseLoading />
          <MeteorRainLoading />
        </div>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
