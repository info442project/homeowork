import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import CampaignType from './components/CampaignType';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Switch>
        <Route path="/about">
        <CampaignType></CampaignType>
        </Route>
        <Route path="/" exact>
        <LandingPage></LandingPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
