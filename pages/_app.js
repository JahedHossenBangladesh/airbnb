import Router from 'next/router';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import {
  SemipolarLoading,
  MeteorRainLoading,
  TransverseLoading,
} from "react-loadingg";



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
