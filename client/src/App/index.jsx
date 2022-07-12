import React from 'react';
import { Provider } from '@rnichi1/bachelor-thesis-frontend';

import NormalizeStyles from './NormalizeStyles';

import BaseStyles from './BaseStyles';
import Toast from './Toast';
import Routes from './Routes';

// We're importing .css because @font-face in styled-components causes font files
// to be constantly re-requested from the server (which causes screen flicker)
// https://github.com/styled-components/styled-components/issues/1593
import './fontStyles.css';

const App = () => (
  <Provider>
    <NormalizeStyles />
    <BaseStyles />
    <Toast />
    <Routes />
  </Provider>
);

export default App;
