import { addDecorator } from "@storybook/react";
import GlobalStyles from "../src/lib/global-styles/global-styles";
import { ThemeProvider } from '@emotion/react';
import { theme } from "@query-builder/data";

addDecorator(storyFn => (
    <ThemeProvider theme={{...theme}}>
        <GlobalStyles />
        {storyFn()}
    </ThemeProvider>
));

export const parameters = {
  controls: {
    expanded: true
  },
  actions: {
    argTypesRegex: "^on[A-Za-z].*"
  },
  options: {}
};


