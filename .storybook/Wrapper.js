import React from 'react';
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { theme } from "nested-react-components";
import "babel-polyfill";
import 'global-styles';

const Wrapper = (storyFn) => (
  <MemoryRouter>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </MemoryRouter>
);

export default Wrapper;
