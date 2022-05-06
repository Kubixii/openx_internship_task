import Content from './components/Content/Content';
import Navigation from './components/Navigation/Navigation';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreProvider from './store/StoreProvider';

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Navigation />
        <Content />
      </Router>
    </StoreProvider>
  );
}

export default App;