import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
library.add(far, fas, faHeart, faHistory);

function App() {
  return <Layout />;
}

export default App;
