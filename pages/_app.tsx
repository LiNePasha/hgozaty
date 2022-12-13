import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { Toaster } from "react-hot-toast"
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import NextNProgress from 'nextjs-progressbar';

let persistor = persistStore(store)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Redux Persist Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <NextNProgress color="#f10025" />
          <Toaster />
          <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )};

export default MyApp;
