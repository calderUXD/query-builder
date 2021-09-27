import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@query-builder/data';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
     <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
