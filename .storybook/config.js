import React from "react";
import { configure, addDecorator, setAddon } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './Wrapper';

addDecorator(Wrapper);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
const req = require.context('../app', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
