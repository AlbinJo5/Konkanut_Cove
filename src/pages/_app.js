import "@/styles/globals.css";
import "react-dropdown/style.css";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/react-dropdown.css";
import Head from "next/head";
import { createTheme, NextUIProvider } from "@nextui-org/react"

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

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </Head>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
