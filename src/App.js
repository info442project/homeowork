import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CampaignType from "./components/CampaignType";
import CampaignTitle from "./components/CampaignTitle";
import CampaignPurpose from "./components/CampaignPurpose";

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Switch>
        <Route path="/campaign_type">
          <CampaignType></CampaignType>
        </Route>
        <Route path="/campaign_title">
          <CampaignTitle></CampaignTitle>
        </Route>
        <Route path="/campaign_purpose">
          <CampaignPurpose></CampaignPurpose>
        </Route>
        <Route path="/" exact>
          <LandingPage></LandingPage>
        </Route>
        {/* <Route exact path="/about">
        <CampaignType></CampaignType>
        </Route> */}
        {/* <Route exact path="/">
        <LandingPage></LandingPage> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
