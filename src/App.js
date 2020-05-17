import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import CampaignType from './components/CampaignType';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Switch>
        {/* <Route exact path="/about">
        <CampaignType></CampaignType>
        </Route> */}
        <Route exact path="/">
        <LandingPage></LandingPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
