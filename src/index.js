import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase-config';

//aqui es donde se renderiza toda la aplicación
ReactDOM.render(
  <React.StrictMode>
     <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense fallback={'Conectando la app...'}>
          <App />
        </Suspense>
      </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
