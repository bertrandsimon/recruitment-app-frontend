import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#B00620"
    }
  }
});


import Head from 'next/head';

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// redux-persist imports
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import hiddenArticles from '../reducers/hiddenArticles';
import user from '../reducers/user';
import jobs from '../reducers/jobs';

const reducers = combineReducers({ hiddenArticles, user, jobs });
const persistConfig = { key: 'jobimat', storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });
 
 const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Provider store={store}>
        <PersistGate persistor={persistor}>
        <Head>
          <title>Next.js App poppins</title>
          
        </Head>
        <Component {...pageProps} />
        </PersistGate>
        </Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
