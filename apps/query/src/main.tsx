import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@query-builder/data';
import { GlobalStyles } from '@query-builder/components';
import { store } from "@query-builder/state";
import { Provider } from 'react-redux'


import App from './app/app';

ReactDOM.render(
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={{...theme}}>
        <App />
      </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);
