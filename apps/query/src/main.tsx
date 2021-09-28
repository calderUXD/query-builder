import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@query-builder/data';
import { GlobalStyles } from '@query-builder/components';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={{...theme}}>
     <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
