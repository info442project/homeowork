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
<<<<<<< HEAD
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
=======
        {/* <Route exact path="/about">
        <CampaignType></CampaignType>
        </Route> */}
        <Route exact path="/">
        <LandingPage></LandingPage>
>>>>>>> 66b98b40b345231f7b92b8a95c6f14a12e983f0f
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
