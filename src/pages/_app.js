import "@/styles/globals.css";
import "react-dropdown/style.css";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/react-dropdown.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import { createTheme, NextUIProvider } from "@nextui-org/react"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import InitialLoading from "@/admin_components/initialLoading";
const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',



      successLight: '#0950004a',
      successLightHover: '#095000',
      successLightActive: '#0950003a',
      successLightContrast: '#095000',
      successBorder: '#095000',
      successBorderHover: '#095000',
      successSolidHover: '#095000',
      successSolidContrast: '#095000',
      successShadow: '#0950003a',

      success: '#095000',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

export const queryClient = new QueryClient()
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      return setLoading(true);
    };
    const handleComplete = () => {
      return setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events, router.asPath]);

  return (
    <>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </Head>
      <NextUIProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {loading && (
            <InitialLoading />
          )}

          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </NextUIProvider>
    </>
  );
}
