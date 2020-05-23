import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import CampaignType from './components/CampaignType';
import CampaignBrowsing from './components/CampaignBrowsing';
import Campaign from './components/Campaign';
import CampaignDetails from './components/CampaignDetails';
import CampaignPurpose from './components/CampaignPurpose';
import CampaignTitle from './components/CampaignTitle';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/type">
        <CampaignType></CampaignType>
        </Route>
        <Route exact path="/">
        <LandingPage></LandingPage>
        </Route>
        <Route exact path="/browse">
        <CampaignBrowsing></CampaignBrowsing>
        </Route>
        <Route exact path="/campaign">
        <Campaign></Campaign>
        </Route>
        <Route exact path="/details">
        <CampaignDetails></CampaignDetails>
        </Route>
        <Route exact path="/title">
        <CampaignTitle></CampaignTitle>
        </Route>
        <Route exact path="/purpose">
        <CampaignPurpose></CampaignPurpose>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
