import React, {StrictMode} from 'react';
//import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import App from './App';

// ⛔️ ReactDOM.render is no longer supported in React 18.
// Use createRoot instead. Until you switch to the new API,
// your app will behave as if it's running React 17.
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);