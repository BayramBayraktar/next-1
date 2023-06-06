//redux
import { Provider } from 'react-redux';
import Store from '../Store/store';
//css
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={Store} >
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
