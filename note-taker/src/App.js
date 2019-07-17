import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import LandingPage from './views/LandingPage/LandingPage';

const AppContainer = styled.div``;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Route exact path="/" render={props => 
        <LandingPage {...props} />
      }
      />
    </AppContainer>
  );
}

export default App;
