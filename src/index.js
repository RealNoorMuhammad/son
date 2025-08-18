import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MenuList, MenuListItem, Separator, styleReset } from 'react95';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
// import { useEffect, useState } from 'react';

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;
AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div> <GlobalStyles />
  <ThemeProvider theme={original}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </ThemeProvider></div>
 
);

reportWebVitals();
