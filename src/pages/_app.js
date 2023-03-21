import Navbar from '@/components/navbar'
import { buttonList } from '@/constants/navbar'
import '@/styles/globals.css'
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/react-dropdown.css'
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
          
        )
}
