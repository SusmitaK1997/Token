import '../styles/globals.css'
import {AppContextWrapper} from '../context/AppContext';


function MyApp({ Component, pageProps }) {
  return (
    <AppContextWrapper>
      <Component {...pageProps} />
    </AppContextWrapper>
  );
}

export default MyApp
