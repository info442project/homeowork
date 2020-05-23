import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CampaignType from "./components/CampaignType";
import CampaignTitle from "./components/CampaignTitle";
import CampaignPurpose from "./components/CampaignPurpose";
import CampaignBrowsing from "./components/CampaignBrowsing";
import Campaign from "./components/Campaign";
import CampaignDetails from "./components/CampaignDetails"; 

function App() {
  var mydb = null 
  mydb = startDB(mydb) 

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
        <Route path="/campaign_details"> 
          <CampaignDetails db = {mydb}></CampaignDetails>
        </Route>
        <Route path="/" exact>
          <LandingPage></LandingPage>
        </Route>
        <Route path="/campaign_browsing">
          <CampaignBrowsing db = {mydb}></CampaignBrowsing>
        </Route>
        <Route path="/campaign_information">
          <Campaign></Campaign>
        </Route>
        <Route exact path="/about">
        <CampaignType></CampaignType>
        </Route> 
      </Switch>
    </BrowserRouter>
  );
}

function startDB(mydb) {
  if (window.openDatabase) {
    mydb = openDatabase("donaid_db", "1.0", "Database of campaign information",
                                2 * 1024 * 1024);

    mydb.transaction(function (t) {
    t.executeSql("CREATE TABLE IF NOT EXISTS campaigns (Title TEXT, Type TEXT, Phone Text, Purpose Text, Location Text, Picture Text, Email Text, Number Int, Date Text)");
    });
  } 
  return mydb
}

export default App;
